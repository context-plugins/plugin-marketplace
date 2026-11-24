from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.submit_website_contact_error import SubmitWebsiteContactErrorBody, submit_website_contact_error_mapper
from ..models.contact_input import ContactInput, ContactInputDict
from ..models.success_model import SuccessModel
from ..server.server import Server


class Contact:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ContactWithRawResponse(client, server)

    def submit_website_contact(
        self, body: ContactInput | ContactInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessModel:
        """Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration
        is not configured, the existing development fallback logs the inquiry and returns success with an explicit
        message; that response does not confirm delivery. Submit only with user consent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Submission accepted. Read any message for delivery caveats.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. ``error`` is ``ErrorCelestiaWebsiteContactApi | RawError``."""
        return unwrap(self._with_raw_response.submit_website_contact(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactWithRawResponse:
        return self._with_raw_response


class AsyncContact:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncContactWithRawResponse(client, server)

    async def submit_website_contact(
        self, body: ContactInput | ContactInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessModel:
        """Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration
        is not configured, the existing development fallback logs the inquiry and returns success with an explicit
        message; that response does not confirm delivery. Submit only with user consent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Submission accepted. Read any message for delivery caveats.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. ``error`` is ``ErrorCelestiaWebsiteContactApi | RawError``."""
        return unwrap(await self._with_raw_response.submit_website_contact(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncContactWithRawResponse:
        return self._with_raw_response


class ContactWithRawResponse(BaseRawResponse[RawClient, Server]):
    def submit_website_contact(
        self, body: ContactInput | ContactInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessModel, SubmitWebsiteContactErrorBody]:
        """Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration
        is not configured, the existing development fallback logs the inquiry and returns success with an explicit
        message; that response does not confirm delivery. Submit only with user consent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_celestia_website_contact_api("/api/contact/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactInput | ContactInputDict](body),
            decoder=json_decoder[SuccessModel],
            error_mapper=submit_website_contact_error_mapper,
            request_options=request_options,
        )


class AsyncContactWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def submit_website_contact(
        self, body: ContactInput | ContactInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessModel, SubmitWebsiteContactErrorBody]:
        """Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration
        is not configured, the existing development fallback logs the inquiry and returns success with an explicit
        message; that response does not confirm delivery. Submit only with user consent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_celestia_website_contact_api("/api/contact/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactInput | ContactInputDict](body),
            decoder=async_json_decoder[SuccessModel],
            error_mapper=submit_website_contact_error_mapper,
            request_options=request_options,
        )
