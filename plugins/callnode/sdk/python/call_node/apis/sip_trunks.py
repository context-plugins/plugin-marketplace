from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.create_sip_trunk_error import CreateSipTrunkErrorBody, create_sip_trunk_error_mapper
from ..errors.delete_sip_trunk_error import DeleteSipTrunkErrorBody, delete_sip_trunk_error_mapper
from ..errors.get_sip_trunk_error import GetSipTrunkErrorBody, get_sip_trunk_error_mapper
from ..errors.list_sip_trunks_error import ListSipTrunksErrorBody, list_sip_trunks_error_mapper
from ..errors.rotate_sip_trunk_credentials_error import (
    RotateSipTrunkCredentialsErrorBody,
    rotate_sip_trunk_credentials_error_mapper,
)
from ..errors.update_sip_trunk_error import UpdateSipTrunkErrorBody, update_sip_trunk_error_mapper
from ..models.api_v1_trunks_response import ApiV1TrunksResponse
from ..models.api_v1_trunks_response1 import ApiV1TrunksResponse1
from ..models.create_trunk_request import CreateTrunkRequest, CreateTrunkRequestDict
from ..models.sip_trunk import SipTrunk
from ..models.update_trunk_request import UpdateTrunkRequest, UpdateTrunkRequestDict
from ..server.server import Server


class SipTrunks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SipTrunksWithRawResponse(client, server, auth)

    def create_sip_trunk(
        self, body: CreateTrunkRequest | CreateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SipTrunk:
        """Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to your SIP host), ingress (accept
        inbound calls from your PBX/SBC), or both — you must supply an ``egressHost`` and/or one or more ``allowedIps``.

        Requires a verified (KYC) account. Trunks beyond your plan's included count incur your plan's additional-trunk
        monthly fee: the first attempt returns ``402 monthly_fee_confirmation_required``; re-submit with
        ``confirmMonthlyFee: true`` to acknowledge the fee and create the trunk.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Trunk created.

        Raises:
            ApiError: Failed validation. Codes: ``invalid_name``, ``invalid_port``, ``unsupported_transport``,
                ``blocked_destination`` (egress host resolves to a private/reserved address), ``invalid_allowed_ips``,
                ``invalid_default_number``, or ``no_config`` (neither an egress host nor any ingress IPs were provided).
                Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                ``monthly_fee_confirmation_required`` — you are beyond your plan's included trunks; re-submit with
                ``confirmMonthlyFee: true``. Or ``insufficient_balance`` — not enough wallet balance for the fee.
                ``account_not_verified`` — trunk creation requires a verified (KYC) account. ``duplicate_name`` — you
                already have an active trunk with that name. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_sip_trunk(body, request_options=request_options))

    def delete_sip_trunk(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1TrunksResponse1:
        """Soft-deletes the trunk. The row is retained (renamed to free the name slot) for call-detail history and
        traceback. A trunk included in your plan (``monthlyFeeApplies: false``) can't be deleted; disable it instead.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``included_in_plan`` — the trunk is included in your plan and can't be
                deleted; disable it with PATCH ``{"status": "disabled"}`` instead (it stays free). Or ``trunk_in_use`` —
                live numbers deliver to this trunk; repoint them first, or disable the trunk. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_sip_trunk(id_, request_options=request_options))

    def get_sip_trunk(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> SipTrunk:
        """Send a ``GET`` request.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The trunk.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_sip_trunk(id_, request_options=request_options))

    def list_sip_trunks(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TrunksResponse:
        """Returns your saved SIP trunks alongside account-level trunk settings — your plan's included trunk count and
        additional-trunk fee, how many trunks are active, the egress source IP your endpoints must allow, and the
        ingress endpoint your PBX/SBC points at.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Your trunks and account trunk settings.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_sip_trunks(request_options=request_options))

    def rotate_sip_trunk_credentials(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SipTrunk:
        """Generates a new SIP password for a registration trunk, keeping the same username. This is the only recovery
        path for a lost password: CallNode stores a non-reversible digest, never the plaintext.

        The new password is returned **once**, in ``sipPassword``. The previous password stops working within about a
        minute, so update your PBX promptly — it will need to re-register.

        Args:
            id_: Trunk id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New credentials. ``sipPassword`` appears only in this response.

        Raises:
            ApiError: ``registration_not_enabled`` — enable registration on the trunk first. Missing, unknown, or badly
                signed credentials — check the HMAC and the timestamp skew. No such resource on this account. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.rotate_sip_trunk_credentials(id_, request_options=request_options))

    def update_sip_trunk(
        self,
        id_: str,
        body: UpdateTrunkRequest | UpdateTrunkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SipTrunk:
        """Updates any subset of a trunk's fields. Send ``egressHost`` as ``null`` or ``""`` to clear it and make the
        trunk ingress-only. The same validation codes as create apply; a request with no recognized fields returns ``400
        no_fields``.

        Args:
            id_: The trunk's ``id``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated trunk.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. No such resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_sip_trunk(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SipTrunksWithRawResponse:
        return self._with_raw_response


class AsyncSipTrunks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSipTrunksWithRawResponse(client, server, auth)

    async def create_sip_trunk(
        self,
        body: CreateTrunkRequest | CreateTrunkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SipTrunk:
        """Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to your SIP host), ingress (accept
        inbound calls from your PBX/SBC), or both — you must supply an ``egressHost`` and/or one or more ``allowedIps``.

        Requires a verified (KYC) account. Trunks beyond your plan's included count incur your plan's additional-trunk
        monthly fee: the first attempt returns ``402 monthly_fee_confirmation_required``; re-submit with
        ``confirmMonthlyFee: true`` to acknowledge the fee and create the trunk.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Trunk created.

        Raises:
            ApiError: Failed validation. Codes: ``invalid_name``, ``invalid_port``, ``unsupported_transport``,
                ``blocked_destination`` (egress host resolves to a private/reserved address), ``invalid_allowed_ips``,
                ``invalid_default_number``, or ``no_config`` (neither an egress host nor any ingress IPs were provided).
                Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                ``monthly_fee_confirmation_required`` — you are beyond your plan's included trunks; re-submit with
                ``confirmMonthlyFee: true``. Or ``insufficient_balance`` — not enough wallet balance for the fee.
                ``account_not_verified`` — trunk creation requires a verified (KYC) account. ``duplicate_name`` — you
                already have an active trunk with that name. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_sip_trunk(body, request_options=request_options))

    async def delete_sip_trunk(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TrunksResponse1:
        """Soft-deletes the trunk. The row is retained (renamed to free the name slot) for call-detail history and
        traceback. A trunk included in your plan (``monthlyFeeApplies: false``) can't be deleted; disable it instead.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``included_in_plan`` — the trunk is included in your plan and can't be
                deleted; disable it with PATCH ``{"status": "disabled"}`` instead (it stays free). Or ``trunk_in_use`` —
                live numbers deliver to this trunk; repoint them first, or disable the trunk. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_sip_trunk(id_, request_options=request_options))

    async def get_sip_trunk(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SipTrunk:
        """Send a ``GET`` request.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The trunk.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_sip_trunk(id_, request_options=request_options))

    async def list_sip_trunks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiV1TrunksResponse:
        """Returns your saved SIP trunks alongside account-level trunk settings — your plan's included trunk count and
        additional-trunk fee, how many trunks are active, the egress source IP your endpoints must allow, and the
        ingress endpoint your PBX/SBC points at.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Your trunks and account trunk settings.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_sip_trunks(request_options=request_options))

    async def rotate_sip_trunk_credentials(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SipTrunk:
        """Generates a new SIP password for a registration trunk, keeping the same username. This is the only recovery
        path for a lost password: CallNode stores a non-reversible digest, never the plaintext.

        The new password is returned **once**, in ``sipPassword``. The previous password stops working within about a
        minute, so update your PBX promptly — it will need to re-register.

        Args:
            id_: Trunk id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New credentials. ``sipPassword`` appears only in this response.

        Raises:
            ApiError: ``registration_not_enabled`` — enable registration on the trunk first. Missing, unknown, or badly
                signed credentials — check the HMAC and the timestamp skew. No such resource on this account. ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rotate_sip_trunk_credentials(id_, request_options=request_options))

    async def update_sip_trunk(
        self,
        id_: str,
        body: UpdateTrunkRequest | UpdateTrunkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SipTrunk:
        """Updates any subset of a trunk's fields. Send ``egressHost`` as ``null`` or ``""`` to clear it and make the
        trunk ingress-only. The same validation codes as create apply; a request with no recognized fields returns ``400
        no_fields``.

        Args:
            id_: The trunk's ``id``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated trunk.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. No such resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_sip_trunk(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSipTrunksWithRawResponse:
        return self._with_raw_response


class SipTrunksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sip_trunk(
        self, body: CreateTrunkRequest | CreateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SipTrunk, CreateSipTrunkErrorBody]:
        """Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to your SIP host), ingress (accept
        inbound calls from your PBX/SBC), or both — you must supply an ``egressHost`` and/or one or more ``allowedIps``.

        Requires a verified (KYC) account. Trunks beyond your plan's included count incur your plan's additional-trunk
        monthly fee: the first attempt returns ``402 monthly_fee_confirmation_required``; re-submit with
        ``confirmMonthlyFee: true`` to acknowledge the fee and create the trunk.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/trunks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTrunkRequest | CreateTrunkRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[SipTrunk],
            error_mapper=create_sip_trunk_error_mapper,
            request_options=request_options,
        )

    def delete_sip_trunk(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TrunksResponse1, DeleteSipTrunkErrorBody]:
        """Soft-deletes the trunk. The row is retained (renamed to free the name slot) for call-detail history and
        traceback. A trunk included in your plan (``monthlyFeeApplies: false``) can't be deleted; disable it instead.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1TrunksResponse1],
            error_mapper=delete_sip_trunk_error_mapper,
            request_options=request_options,
        )

    def get_sip_trunk(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SipTrunk, GetSipTrunkErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[SipTrunk],
            error_mapper=get_sip_trunk_error_mapper,
            request_options=request_options,
        )

    def list_sip_trunks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TrunksResponse, ListSipTrunksErrorBody]:
        """Returns your saved SIP trunks alongside account-level trunk settings — your plan's included trunk count and
        additional-trunk fee, how many trunks are active, the egress source IP your endpoints must allow, and the
        ingress endpoint your PBX/SBC points at.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/trunks"),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1TrunksResponse],
            error_mapper=list_sip_trunks_error_mapper,
            request_options=request_options,
        )

    def rotate_sip_trunk_credentials(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SipTrunk, RotateSipTrunkCredentialsErrorBody]:
        """Generates a new SIP password for a registration trunk, keeping the same username. This is the only recovery
        path for a lost password: CallNode stores a non-reversible digest, never the plaintext.

        The new password is returned **once**, in ``sipPassword``. The previous password stops working within about a
        minute, so update your PBX promptly — it will need to re-register.

        Args:
            id_: Trunk id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/trunks/{id}/rotate-credentials"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[SipTrunk],
            error_mapper=rotate_sip_trunk_credentials_error_mapper,
            request_options=request_options,
        )

    def update_sip_trunk(
        self,
        id_: str,
        body: UpdateTrunkRequest | UpdateTrunkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SipTrunk, UpdateSipTrunkErrorBody]:
        """Updates any subset of a trunk's fields. Send ``egressHost`` as ``null`` or ``""`` to clear it and make the
        trunk ingress-only. The same validation codes as create apply; a request with no recognized fields returns ``400
        no_fields``.

        Args:
            id_: The trunk's ``id``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTrunkRequest | UpdateTrunkRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[SipTrunk],
            error_mapper=update_sip_trunk_error_mapper,
            request_options=request_options,
        )


class AsyncSipTrunksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sip_trunk(
        self,
        body: CreateTrunkRequest | CreateTrunkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SipTrunk, CreateSipTrunkErrorBody]:
        """Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to your SIP host), ingress (accept
        inbound calls from your PBX/SBC), or both — you must supply an ``egressHost`` and/or one or more ``allowedIps``.

        Requires a verified (KYC) account. Trunks beyond your plan's included count incur your plan's additional-trunk
        monthly fee: the first attempt returns ``402 monthly_fee_confirmation_required``; re-submit with
        ``confirmMonthlyFee: true`` to acknowledge the fee and create the trunk.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/trunks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTrunkRequest | CreateTrunkRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[SipTrunk],
            error_mapper=create_sip_trunk_error_mapper,
            request_options=request_options,
        )

    async def delete_sip_trunk(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TrunksResponse1, DeleteSipTrunkErrorBody]:
        """Soft-deletes the trunk. The row is retained (renamed to free the name slot) for call-detail history and
        traceback. A trunk included in your plan (``monthlyFeeApplies: false``) can't be deleted; disable it instead.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1TrunksResponse1],
            error_mapper=delete_sip_trunk_error_mapper,
            request_options=request_options,
        )

    async def get_sip_trunk(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SipTrunk, GetSipTrunkErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The trunk's ``id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[SipTrunk],
            error_mapper=get_sip_trunk_error_mapper,
            request_options=request_options,
        )

    async def list_sip_trunks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TrunksResponse, ListSipTrunksErrorBody]:
        """Returns your saved SIP trunks alongside account-level trunk settings — your plan's included trunk count and
        additional-trunk fee, how many trunks are active, the egress source IP your endpoints must allow, and the
        ingress endpoint your PBX/SBC points at.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/trunks"),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1TrunksResponse],
            error_mapper=list_sip_trunks_error_mapper,
            request_options=request_options,
        )

    async def rotate_sip_trunk_credentials(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SipTrunk, RotateSipTrunkCredentialsErrorBody]:
        """Generates a new SIP password for a registration trunk, keeping the same username. This is the only recovery
        path for a lost password: CallNode stores a non-reversible digest, never the plaintext.

        The new password is returned **once**, in ``sipPassword``. The previous password stops working within about a
        minute, so update your PBX promptly — it will need to re-register.

        Args:
            id_: Trunk id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/trunks/{id}/rotate-credentials"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[SipTrunk],
            error_mapper=rotate_sip_trunk_credentials_error_mapper,
            request_options=request_options,
        )

    async def update_sip_trunk(
        self,
        id_: str,
        body: UpdateTrunkRequest | UpdateTrunkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SipTrunk, UpdateSipTrunkErrorBody]:
        """Updates any subset of a trunk's fields. Send ``egressHost`` as ``null`` or ``""`` to clear it and make the
        trunk ingress-only. The same validation codes as create apply; a request with no recognized fields returns ``400
        no_fields``.

        Args:
            id_: The trunk's ``id``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/trunks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTrunkRequest | UpdateTrunkRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[SipTrunk],
            error_mapper=update_sip_trunk_error_mapper,
            request_options=request_options,
        )
