from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cardvalidator_error import CardvalidatorErrorBody, cardvalidator_error_mapper
from ..errors.disposablephone_error import DisposablephoneErrorBody, disposablephone_error_mapper
from ..errors.emaildisposablechecker_error import EmaildisposablecheckerErrorBody, emaildisposablechecker_error_mapper
from ..errors.emailvalidator_error import EmailvalidatorErrorBody, emailvalidator_error_mapper
from ..errors.passwordstrength_error import PasswordstrengthErrorBody, passwordstrength_error_mapper
from ..errors.phonenumbervalidator_error import PhonenumbervalidatorErrorBody, phonenumbervalidator_error_mapper
from ..errors.seovalidator_error import SeovalidatorErrorBody, seovalidator_error_mapper
from ..errors.spamdetector_error import SpamdetectorErrorBody, spamdetector_error_mapper
from ..errors.usernameprofanity_error import UsernameprofanityErrorBody, usernameprofanity_error_mapper
from ..models.v1_cardvalidator_response import V1CardvalidatorResponse
from ..models.v1_disposablephone_response import V1DisposablephoneResponse
from ..models.v1_emaildisposablechecker_response import V1EmaildisposablecheckerResponse
from ..models.v1_emailvalidator_response import V1EmailvalidatorResponse
from ..models.v1_passwordstrength_response import V1PasswordstrengthResponse
from ..models.v1_phonenumbervalidator_response import V1PhonenumbervalidatorResponse
from ..models.v1_seovalidator_request import V1SeovalidatorRequest, V1SeovalidatorRequestDict
from ..models.v1_seovalidator_response import V1SeovalidatorResponse
from ..models.v1_spamdetector_request import V1SpamdetectorRequest, V1SpamdetectorRequestDict
from ..models.v1_spamdetector_response import V1SpamdetectorResponse
from ..models.v1_usernameprofanity_response import V1UsernameprofanityResponse
from ..server.server import Server


class DataValidation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataValidationWithRawResponse(client, server, auth)

    def cardvalidator(
        self, number: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CardvalidatorResponse:
        """Validate a card number to ensure it is valid

        Args:
            number: The card number to validate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cardvalidator(number, request_options=request_options))

    def disposablephone(
        self, phone: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DisposablephoneResponse:
        """Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

        Args:
            phone: The phone number to check in E.164 format (e.g., +12085813945)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disposablephone(phone, request_options=request_options))

    def emaildisposablechecker(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1EmaildisposablecheckerResponse:
        """Check if an email address is disposable

        Args:
            email: The email address to check (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.emaildisposablechecker(email, request_options=request_options))

    def emailvalidator(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1EmailvalidatorResponse:
        """Validate if an email address is valid and exists

        Args:
            email: The email address to validate (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.emailvalidator(email, request_options=request_options))

    def passwordstrength(
        self, password: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PasswordstrengthResponse:
        """Check the strength of a password

        Args:
            password: The password to check the strength of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.passwordstrength(password, request_options=request_options))

    def phonenumbervalidator(
        self, number: str, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PhonenumbervalidatorResponse:
        """Validate a phone number

        Args:
            number: The phone number to validate
            country: The country code of the phone number (e.g., us, uk)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.phonenumbervalidator(number, country, request_options=request_options))

    def seovalidator(
        self,
        body: V1SeovalidatorRequest | V1SeovalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SeovalidatorResponse:
        """Validate the SEO metrics of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.seovalidator(body, request_options=request_options))

    def spamdetector(
        self,
        body: V1SpamdetectorRequest | V1SpamdetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SpamdetectorResponse:
        """Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against
        the spam database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.spamdetector(body, request_options=request_options))

    def usernameprofanity(
        self, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1UsernameprofanityResponse:
        """Check if a username is inappropriate or profane

        Args:
            username: The username to check if it is inappropriate or profane
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.usernameprofanity(username, request_options=request_options))

    @property
    def with_raw_response(self) -> DataValidationWithRawResponse:
        return self._with_raw_response


class AsyncDataValidation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataValidationWithRawResponse(client, server, auth)

    async def cardvalidator(
        self, number: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CardvalidatorResponse:
        """Validate a card number to ensure it is valid

        Args:
            number: The card number to validate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cardvalidator(number, request_options=request_options))

    async def disposablephone(
        self, phone: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DisposablephoneResponse:
        """Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

        Args:
            phone: The phone number to check in E.164 format (e.g., +12085813945)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.disposablephone(phone, request_options=request_options))

    async def emaildisposablechecker(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1EmaildisposablecheckerResponse:
        """Check if an email address is disposable

        Args:
            email: The email address to check (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.emaildisposablechecker(email, request_options=request_options))

    async def emailvalidator(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1EmailvalidatorResponse:
        """Validate if an email address is valid and exists

        Args:
            email: The email address to validate (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.emailvalidator(email, request_options=request_options))

    async def passwordstrength(
        self, password: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PasswordstrengthResponse:
        """Check the strength of a password

        Args:
            password: The password to check the strength of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.passwordstrength(password, request_options=request_options))

    async def phonenumbervalidator(
        self, number: str, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PhonenumbervalidatorResponse:
        """Validate a phone number

        Args:
            number: The phone number to validate
            country: The country code of the phone number (e.g., us, uk)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.phonenumbervalidator(number, country, request_options=request_options)
        )

    async def seovalidator(
        self,
        body: V1SeovalidatorRequest | V1SeovalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SeovalidatorResponse:
        """Validate the SEO metrics of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.seovalidator(body, request_options=request_options))

    async def spamdetector(
        self,
        body: V1SpamdetectorRequest | V1SpamdetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SpamdetectorResponse:
        """Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against
        the spam database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.spamdetector(body, request_options=request_options))

    async def usernameprofanity(
        self, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UsernameprofanityResponse:
        """Check if a username is inappropriate or profane

        Args:
            username: The username to check if it is inappropriate or profane
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.usernameprofanity(username, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataValidationWithRawResponse:
        return self._with_raw_response


class DataValidationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cardvalidator(
        self, number: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CardvalidatorResponse, CardvalidatorErrorBody]:
        """Validate a card number to ensure it is valid

        Args:
            number: The card number to validate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cardvalidator"),
            query_params=[param[str]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CardvalidatorResponse],
            error_mapper=cardvalidator_error_mapper,
            request_options=request_options,
        )

    def disposablephone(
        self, phone: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DisposablephoneResponse, DisposablephoneErrorBody]:
        """Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

        Args:
            phone: The phone number to check in E.164 format (e.g., +12085813945)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/disposablephone"),
            query_params=[param[str]("phone", phone)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DisposablephoneResponse],
            error_mapper=disposablephone_error_mapper,
            request_options=request_options,
        )

    def emaildisposablechecker(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmaildisposablecheckerResponse, EmaildisposablecheckerErrorBody]:
        """Check if an email address is disposable

        Args:
            email: The email address to check (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emaildisposablechecker"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EmaildisposablecheckerResponse],
            error_mapper=emaildisposablechecker_error_mapper,
            request_options=request_options,
        )

    def emailvalidator(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmailvalidatorResponse, EmailvalidatorErrorBody]:
        """Validate if an email address is valid and exists

        Args:
            email: The email address to validate (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emailvalidator"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EmailvalidatorResponse],
            error_mapper=emailvalidator_error_mapper,
            request_options=request_options,
        )

    def passwordstrength(
        self, password: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PasswordstrengthResponse, PasswordstrengthErrorBody]:
        """Check the strength of a password

        Args:
            password: The password to check the strength of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/passwordstrength"),
            query_params=[param[str]("password", password)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PasswordstrengthResponse],
            error_mapper=passwordstrength_error_mapper,
            request_options=request_options,
        )

    def phonenumbervalidator(
        self, number: str, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PhonenumbervalidatorResponse, PhonenumbervalidatorErrorBody]:
        """Validate a phone number

        Args:
            number: The phone number to validate
            country: The country code of the phone number (e.g., us, uk)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/phonenumbervalidator"),
            query_params=[param[str]("number", number), param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PhonenumbervalidatorResponse],
            error_mapper=phonenumbervalidator_error_mapper,
            request_options=request_options,
        )

    def seovalidator(
        self,
        body: V1SeovalidatorRequest | V1SeovalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SeovalidatorResponse, SeovalidatorErrorBody]:
        """Validate the SEO metrics of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/seovalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SeovalidatorRequest | V1SeovalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SeovalidatorResponse],
            error_mapper=seovalidator_error_mapper,
            request_options=request_options,
        )

    def spamdetector(
        self,
        body: V1SpamdetectorRequest | V1SpamdetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpamdetectorResponse, SpamdetectorErrorBody]:
        """Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against
        the spam database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/spamdetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SpamdetectorRequest | V1SpamdetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SpamdetectorResponse],
            error_mapper=spamdetector_error_mapper,
            request_options=request_options,
        )

    def usernameprofanity(
        self, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsernameprofanityResponse, UsernameprofanityErrorBody]:
        """Check if a username is inappropriate or profane

        Args:
            username: The username to check if it is inappropriate or profane
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usernameprofanity"),
            query_params=[param[str]("username", username)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UsernameprofanityResponse],
            error_mapper=usernameprofanity_error_mapper,
            request_options=request_options,
        )


class AsyncDataValidationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cardvalidator(
        self, number: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CardvalidatorResponse, CardvalidatorErrorBody]:
        """Validate a card number to ensure it is valid

        Args:
            number: The card number to validate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cardvalidator"),
            query_params=[param[str]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CardvalidatorResponse],
            error_mapper=cardvalidator_error_mapper,
            request_options=request_options,
        )

    async def disposablephone(
        self, phone: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DisposablephoneResponse, DisposablephoneErrorBody]:
        """Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

        Args:
            phone: The phone number to check in E.164 format (e.g., +12085813945)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/disposablephone"),
            query_params=[param[str]("phone", phone)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DisposablephoneResponse],
            error_mapper=disposablephone_error_mapper,
            request_options=request_options,
        )

    async def emaildisposablechecker(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmaildisposablecheckerResponse, EmaildisposablecheckerErrorBody]:
        """Check if an email address is disposable

        Args:
            email: The email address to check (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emaildisposablechecker"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EmaildisposablecheckerResponse],
            error_mapper=emaildisposablechecker_error_mapper,
            request_options=request_options,
        )

    async def emailvalidator(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmailvalidatorResponse, EmailvalidatorErrorBody]:
        """Validate if an email address is valid and exists

        Args:
            email: The email address to validate (e.g., support@myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emailvalidator"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EmailvalidatorResponse],
            error_mapper=emailvalidator_error_mapper,
            request_options=request_options,
        )

    async def passwordstrength(
        self, password: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PasswordstrengthResponse, PasswordstrengthErrorBody]:
        """Check the strength of a password

        Args:
            password: The password to check the strength of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/passwordstrength"),
            query_params=[param[str]("password", password)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PasswordstrengthResponse],
            error_mapper=passwordstrength_error_mapper,
            request_options=request_options,
        )

    async def phonenumbervalidator(
        self, number: str, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PhonenumbervalidatorResponse, PhonenumbervalidatorErrorBody]:
        """Validate a phone number

        Args:
            number: The phone number to validate
            country: The country code of the phone number (e.g., us, uk)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/phonenumbervalidator"),
            query_params=[param[str]("number", number), param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PhonenumbervalidatorResponse],
            error_mapper=phonenumbervalidator_error_mapper,
            request_options=request_options,
        )

    async def seovalidator(
        self,
        body: V1SeovalidatorRequest | V1SeovalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SeovalidatorResponse, SeovalidatorErrorBody]:
        """Validate the SEO metrics of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/seovalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SeovalidatorRequest | V1SeovalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SeovalidatorResponse],
            error_mapper=seovalidator_error_mapper,
            request_options=request_options,
        )

    async def spamdetector(
        self,
        body: V1SpamdetectorRequest | V1SpamdetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpamdetectorResponse, SpamdetectorErrorBody]:
        """Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against
        the spam database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/spamdetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SpamdetectorRequest | V1SpamdetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SpamdetectorResponse],
            error_mapper=spamdetector_error_mapper,
            request_options=request_options,
        )

    async def usernameprofanity(
        self, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsernameprofanityResponse, UsernameprofanityErrorBody]:
        """Check if a username is inappropriate or profane

        Args:
            username: The username to check if it is inappropriate or profane
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usernameprofanity"),
            query_params=[param[str]("username", username)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UsernameprofanityResponse],
            error_mapper=usernameprofanity_error_mapper,
            request_options=request_options,
        )
