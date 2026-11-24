from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_text_decoder,
    form_body,
    param,
    text_decoder,
    unwrap,
)
from ..errors.access_login_error import AccessLoginErrorBody, access_login_error_mapper
from ..server.server import Server


class Access:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AccessWithRawResponse(client, server)

    def access_login(self, username: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """To use the Skribble API, you first need an API key and an API user. Both can be managed on the API key page
        in your business profile. Consult our guide for setup instructions.

        Skribble offers two types of API keys:

        **Demo API keys**

        Demo API keys are for testing and development purposes. Signatures created with demo keys have no legal weight
        and are free of charge.

        Demo keys can be identified by their name, which starts with **api_demo**.

        **Production API keys**

        Production API keys are used for live systems. Signatures created with production keys will be invoiced.

        Production keys can be identified by their name, which starts with **api_production** or, in some cases,
        **api_prod**.

        > **⚠ Note**
        > All costs incurred by signature requests created with your API keys will
        > be **charged to your business**. We recommend starting with a demo API
        > key during development and testing, and switching to a production key
        > only once testing is complete.

        For help setting up Skribble Business, contact us at support@skribble.com.

        To obtain an access token, authenticate using the ``/access/login`` endpoint. You can pass your credentials as
        raw JSON or as ``x-www-form-urlencoded`` key-value pairs (see example requests).

        Upon successful authentication, a JSON Web Token (JWT) is returned. This JWT must be included in nearly every
        API request.

        The access token is passed in the ``Authorization`` HTTP header using the ``Bearer`` scheme. Example:
        ``Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...``

        ### Token life cycle

        #### API key

        API keys have a long but finite lifetime. The validity period depends on the volume of API calls and is agreed
        upon individually as part of the shared secret agreement.

        #### Access token

        Access tokens have a lifetime of approximately **20 minutes**. Automatic token renewal is not currently
        supported.

        #### Logout

        There is **no logout endpoint**. Access tokens expire automatically after the defined lifetime.

        Args:
            username: The username of the users credentials to login
            api_key: The API key of the users credentials to login
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Login failed — username or API key is invalid. The response body shape depends on the
                request ``Content-Type``: - ``application/json`` request → ``application/json`` Problem envelope -
                ``application/x-www-form-urlencoded`` request → ``text/plain`` body containing the error message Not
                acceptable Too many requests Internal server error Service unavailable ``error`` is ``Problem |
                RawError``."""
        return unwrap(self._with_raw_response.access_login(username, api_key, request_options=request_options))

    @property
    def with_raw_response(self) -> AccessWithRawResponse:
        return self._with_raw_response


class AsyncAccess:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAccessWithRawResponse(client, server)

    async def access_login(
        self, username: str, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """To use the Skribble API, you first need an API key and an API user. Both can be managed on the API key page
        in your business profile. Consult our guide for setup instructions.

        Skribble offers two types of API keys:

        **Demo API keys**

        Demo API keys are for testing and development purposes. Signatures created with demo keys have no legal weight
        and are free of charge.

        Demo keys can be identified by their name, which starts with **api_demo**.

        **Production API keys**

        Production API keys are used for live systems. Signatures created with production keys will be invoiced.

        Production keys can be identified by their name, which starts with **api_production** or, in some cases,
        **api_prod**.

        > **⚠ Note**
        > All costs incurred by signature requests created with your API keys will
        > be **charged to your business**. We recommend starting with a demo API
        > key during development and testing, and switching to a production key
        > only once testing is complete.

        For help setting up Skribble Business, contact us at support@skribble.com.

        To obtain an access token, authenticate using the ``/access/login`` endpoint. You can pass your credentials as
        raw JSON or as ``x-www-form-urlencoded`` key-value pairs (see example requests).

        Upon successful authentication, a JSON Web Token (JWT) is returned. This JWT must be included in nearly every
        API request.

        The access token is passed in the ``Authorization`` HTTP header using the ``Bearer`` scheme. Example:
        ``Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...``

        ### Token life cycle

        #### API key

        API keys have a long but finite lifetime. The validity period depends on the volume of API calls and is agreed
        upon individually as part of the shared secret agreement.

        #### Access token

        Access tokens have a lifetime of approximately **20 minutes**. Automatic token renewal is not currently
        supported.

        #### Logout

        There is **no logout endpoint**. Access tokens expire automatically after the defined lifetime.

        Args:
            username: The username of the users credentials to login
            api_key: The API key of the users credentials to login
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Login failed — username or API key is invalid. The response body shape depends on the
                request ``Content-Type``: - ``application/json`` request → ``application/json`` Problem envelope -
                ``application/x-www-form-urlencoded`` request → ``text/plain`` body containing the error message Not
                acceptable Too many requests Internal server error Service unavailable ``error`` is ``Problem |
                RawError``."""
        return unwrap(await self._with_raw_response.access_login(username, api_key, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccessWithRawResponse:
        return self._with_raw_response


class AccessWithRawResponse(BaseRawResponse[RawClient, Server]):
    def access_login(
        self, username: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, AccessLoginErrorBody]:
        """To use the Skribble API, you first need an API key and an API user. Both can be managed on the API key page
        in your business profile. Consult our guide for setup instructions.

        Skribble offers two types of API keys:

        **Demo API keys**

        Demo API keys are for testing and development purposes. Signatures created with demo keys have no legal weight
        and are free of charge.

        Demo keys can be identified by their name, which starts with **api_demo**.

        **Production API keys**

        Production API keys are used for live systems. Signatures created with production keys will be invoiced.

        Production keys can be identified by their name, which starts with **api_production** or, in some cases,
        **api_prod**.

        > **⚠ Note**
        > All costs incurred by signature requests created with your API keys will
        > be **charged to your business**. We recommend starting with a demo API
        > key during development and testing, and switching to a production key
        > only once testing is complete.

        For help setting up Skribble Business, contact us at support@skribble.com.

        To obtain an access token, authenticate using the ``/access/login`` endpoint. You can pass your credentials as
        raw JSON or as ``x-www-form-urlencoded`` key-value pairs (see example requests).

        Upon successful authentication, a JSON Web Token (JWT) is returned. This JWT must be included in nearly every
        API request.

        The access token is passed in the ``Authorization`` HTTP header using the ``Bearer`` scheme. Example:
        ``Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...``

        ### Token life cycle

        #### API key

        API keys have a long but finite lifetime. The validity period depends on the volume of API calls and is agreed
        upon individually as part of the shared secret agreement.

        #### Access token

        Access tokens have a lifetime of approximately **20 minutes**. Automatic token renewal is not currently
        supported.

        #### Logout

        There is **no logout endpoint**. Access tokens expire automatically after the defined lifetime.

        Args:
            username: The username of the users credentials to login
            api_key: The API key of the users credentials to login
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/access/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str]("username", username), param[str]("api-key", api_key)),
            decoder=text_decoder[str],
            error_mapper=access_login_error_mapper,
            request_options=request_options,
        )


class AsyncAccessWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def access_login(
        self, username: str, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, AccessLoginErrorBody]:
        """To use the Skribble API, you first need an API key and an API user. Both can be managed on the API key page
        in your business profile. Consult our guide for setup instructions.

        Skribble offers two types of API keys:

        **Demo API keys**

        Demo API keys are for testing and development purposes. Signatures created with demo keys have no legal weight
        and are free of charge.

        Demo keys can be identified by their name, which starts with **api_demo**.

        **Production API keys**

        Production API keys are used for live systems. Signatures created with production keys will be invoiced.

        Production keys can be identified by their name, which starts with **api_production** or, in some cases,
        **api_prod**.

        > **⚠ Note**
        > All costs incurred by signature requests created with your API keys will
        > be **charged to your business**. We recommend starting with a demo API
        > key during development and testing, and switching to a production key
        > only once testing is complete.

        For help setting up Skribble Business, contact us at support@skribble.com.

        To obtain an access token, authenticate using the ``/access/login`` endpoint. You can pass your credentials as
        raw JSON or as ``x-www-form-urlencoded`` key-value pairs (see example requests).

        Upon successful authentication, a JSON Web Token (JWT) is returned. This JWT must be included in nearly every
        API request.

        The access token is passed in the ``Authorization`` HTTP header using the ``Bearer`` scheme. Example:
        ``Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...``

        ### Token life cycle

        #### API key

        API keys have a long but finite lifetime. The validity period depends on the volume of API calls and is agreed
        upon individually as part of the shared secret agreement.

        #### Access token

        Access tokens have a lifetime of approximately **20 minutes**. Automatic token renewal is not currently
        supported.

        #### Logout

        There is **no logout endpoint**. Access tokens expire automatically after the defined lifetime.

        Args:
            username: The username of the users credentials to login
            api_key: The API key of the users credentials to login
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/access/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str]("username", username), param[str]("api-key", api_key)),
            decoder=async_text_decoder[str],
            error_mapper=access_login_error_mapper,
            request_options=request_options,
        )
