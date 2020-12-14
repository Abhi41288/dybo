
const END_POINT = "http://13.235.55.43/test/api/create_user";

export const createUser = (createUser) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', END_POINT, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(createUser || {
            "first_name": "FN",
            "last_name": "LN",
            "email": "k@ssa.com",
            "phone": "+91123456789",
            "linkedInProfile": "https://google.com"
        }));
        xhr.onload = function () {
            return resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function () {
            return reject({});
        };
    });
}