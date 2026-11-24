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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_signature_signer_error import AddSignatureSignerErrorBody, add_signature_signer_error_mapper
from ..errors.remove_signature_signer_error import RemoveSignatureSignerErrorBody, remove_signature_signer_error_mapper
from ..models.signature_response_v3 import SignatureResponseV3
from ..models.unions.signature_recipient_model import SignatureRecipientModel, SignatureRecipientModelDict
from ..server.server import Server


class SignatureSigner:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignatureSignerWithRawResponse(client, server, auth)

    def add_signature_signer(
        self,
        sr_id: UUID,
        body: SignatureRecipientModel | SignatureRecipientModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Adds an individual signer to the ``SignatureRequest`` with the ID ``SR_ID``. Use ``account_email`` to invite
        a signer with an existing Skribble account, or ``signer_identity_data`` to invite a No-Account-Signer (NAS).

        > **Good to know**
        > We recommend combining ``signer_identity_data`` and ``account_email`` when
        > you are unsure whether the user has a Skribble account. If a matching
        > account exists, the user will find the ``SignatureRequest`` in the
        > **To sign** section of their account on my.skribble.com.
        >
        > If you invite them using only ``signer_identity_data``, the document will
        > not appear in their Skribble account even if one exists — they will need
        > to access it via the link in their invitation email.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.add_signature_signer(sr_id, body, request_options=request_options))

    def remove_signature_signer(
        self, sr_id: UUID, sid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes an individual signer from the ``SignatureRequest``. Provide the SignatureRequest ID ``SR_ID`` and the
        Signature ID ``SID`` of the signer to remove.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            sid: Unique ID of the signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.remove_signature_signer(sr_id, sid, request_options=request_options))

    @property
    def with_raw_response(self) -> SignatureSignerWithRawResponse:
        return self._with_raw_response


class AsyncSignatureSigner:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignatureSignerWithRawResponse(client, server, auth)

    async def add_signature_signer(
        self,
        sr_id: UUID,
        body: SignatureRecipientModel | SignatureRecipientModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Adds an individual signer to the ``SignatureRequest`` with the ID ``SR_ID``. Use ``account_email`` to invite
        a signer with an existing Skribble account, or ``signer_identity_data`` to invite a No-Account-Signer (NAS).

        > **Good to know**
        > We recommend combining ``signer_identity_data`` and ``account_email`` when
        > you are unsure whether the user has a Skribble account. If a matching
        > account exists, the user will find the ``SignatureRequest`` in the
        > **To sign** section of their account on my.skribble.com.
        >
        > If you invite them using only ``signer_identity_data``, the document will
        > not appear in their Skribble account even if one exists — they will need
        > to access it via the link in their invitation email.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.add_signature_signer(sr_id, body, request_options=request_options))

    async def remove_signature_signer(
        self, sr_id: UUID, sid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes an individual signer from the ``SignatureRequest``. Provide the SignatureRequest ID ``SR_ID`` and the
        Signature ID ``SID`` of the signer to remove.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            sid: Unique ID of the signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_signature_signer(sr_id, sid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSignatureSignerWithRawResponse:
        return self._with_raw_response


class SignatureSignerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_signature_signer(
        self,
        sr_id: UUID,
        body: SignatureRecipientModel | SignatureRecipientModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, AddSignatureSignerErrorBody]:
        """Adds an individual signer to the ``SignatureRequest`` with the ID ``SR_ID``. Use ``account_email`` to invite
        a signer with an existing Skribble account, or ``signer_identity_data`` to invite a No-Account-Signer (NAS).

        > **Good to know**
        > We recommend combining ``signer_identity_data`` and ``account_email`` when
        > you are unsure whether the user has a Skribble account. If a matching
        > account exists, the user will find the ``SignatureRequest`` in the
        > **To sign** section of their account on my.skribble.com.
        >
        > If you invite them using only ``signer_identity_data``, the document will
        > not appear in their Skribble account even if one exists — they will need
        > to access it via the link in their invitation email.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_signer_api("/signature-requests/{SR_ID}/signatures"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureRecipientModel | SignatureRecipientModelDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseV3],
            error_mapper=add_signature_signer_error_mapper,
            request_options=request_options,
        )

    def remove_signature_signer(
        self, sr_id: UUID, sid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveSignatureSignerErrorBody]:
        """Removes an individual signer from the ``SignatureRequest``. Provide the SignatureRequest ID ``SR_ID`` and the
        Signature ID ``SID`` of the signer to remove.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            sid: Unique ID of the signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_signer_api(
                "/signature-requests/{SR_ID}/signatures/{SID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("SID", sid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=remove_signature_signer_error_mapper,
            request_options=request_options,
        )


class AsyncSignatureSignerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_signature_signer(
        self,
        sr_id: UUID,
        body: SignatureRecipientModel | SignatureRecipientModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, AddSignatureSignerErrorBody]:
        """Adds an individual signer to the ``SignatureRequest`` with the ID ``SR_ID``. Use ``account_email`` to invite
        a signer with an existing Skribble account, or ``signer_identity_data`` to invite a No-Account-Signer (NAS).

        > **Good to know**
        > We recommend combining ``signer_identity_data`` and ``account_email`` when
        > you are unsure whether the user has a Skribble account. If a matching
        > account exists, the user will find the ``SignatureRequest`` in the
        > **To sign** section of their account on my.skribble.com.
        >
        > If you invite them using only ``signer_identity_data``, the document will
        > not appear in their Skribble account even if one exists — they will need
        > to access it via the link in their invitation email.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_signer_api("/signature-requests/{SR_ID}/signatures"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureRecipientModel | SignatureRecipientModelDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseV3],
            error_mapper=add_signature_signer_error_mapper,
            request_options=request_options,
        )

    async def remove_signature_signer(
        self, sr_id: UUID, sid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveSignatureSignerErrorBody]:
        """Removes an individual signer from the ``SignatureRequest``. Provide the SignatureRequest ID ``SR_ID`` and the
        Signature ID ``SID`` of the signer to remove.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            sid: Unique ID of the signer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_signer_api(
                "/signature-requests/{SR_ID}/signatures/{SID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("SID", sid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=remove_signature_signer_error_mapper,
            request_options=request_options,
        )
