import axios from "axios"
const hesbonmondaydAPI = axios.create({
  baseURL: "https://hesbon-monday-77-d-109176.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return hesbonmondaydAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_article_list(payload) {
  return hesbonmondaydAPI.get(`/api/v1/article/`)
}
function api_v1_article_create(payload) {
  return hesbonmondaydAPI.post(`/api/v1/article/`, payload)
}
function api_v1_article_retrieve(payload) {
  return hesbonmondaydAPI.get(`/api/v1/article/${payload.id}/`)
}
function api_v1_article_update(payload) {
  return hesbonmondaydAPI.put(`/api/v1/article/${payload.id}/`, payload)
}
function api_v1_article_partial_update(payload) {
  return hesbonmondaydAPI.patch(`/api/v1/article/${payload.id}/`, payload)
}
function api_v1_article_destroy(payload) {
  return hesbonmondaydAPI.delete(`/api/v1/article/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return hesbonmondaydAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return hesbonmondaydAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return hesbonmondaydAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return hesbonmondaydAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return hesbonmondaydAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hesbonmondaydAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return hesbonmondaydAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_article_list,
  api_v1_article_create,
  api_v1_article_retrieve,
  api_v1_article_update,
  api_v1_article_partial_update,
  api_v1_article_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
