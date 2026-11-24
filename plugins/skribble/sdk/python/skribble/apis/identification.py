from __future__ import annotations

from typing import Any
from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    async_text_decoder,
    file_decoder,
    json_decoder,
    param,
    text_decoder,
    unwrap,
)
from ..errors.get_identification_evidence_files_error import (
    GetIdentificationEvidenceFilesErrorBody,
    get_identification_evidence_files_error_mapper,
)
from ..errors.get_identification_evidence_json_error import (
    GetIdentificationEvidenceJsonErrorBody,
    get_identification_evidence_json_error_mapper,
)
from ..errors.get_identification_evidence_jwt_error import (
    GetIdentificationEvidenceJwtErrorBody,
    get_identification_evidence_jwt_error_mapper,
)
from ..errors.get_identification_evidence_status_error import (
    GetIdentificationEvidenceStatusErrorBody,
    get_identification_evidence_status_error_mapper,
)
from ..models.identification_evidence_status_response import IdentificationEvidenceStatusResponse
from ..server.server import Server


class Identification:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdentificationWithRawResponse(client, server, auth)

    def get_identification_evidence_files(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Downloads all files related to the identification evidence as a ZIP archive.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — ZIP archive containing all identification evidence files.

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_identification_evidence_files(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    def get_identification_evidence_json(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Retrieves the full identification evidence record as JSON for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identification result for the completed identification process. The exact schema depends on the
            identification provider configuration and is available on request.

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_identification_evidence_json(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    def get_identification_evidence_jwt(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """Retrieves the signed JWT for the identification evidence. Useful for cryptographic verification or downstream
        integration purposes.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_identification_evidence_jwt(sr_id, evidence_id, request_options=request_options)
        )

    def get_identification_evidence_status(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IdentificationEvidenceStatusResponse:
        """Returns the current status of the identification evidence for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must have been initiated (``evidence_id`` is required,
        available in ``signer_identity_data.evidence_id`` of the ``SignatureRequest`` response).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_identification_evidence_status(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IdentificationWithRawResponse:
        return self._with_raw_response


class AsyncIdentification:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdentificationWithRawResponse(client, server, auth)

    async def get_identification_evidence_files(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Downloads all files related to the identification evidence as a ZIP archive.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — ZIP archive containing all identification evidence files.

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_identification_evidence_files(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    async def get_identification_evidence_json(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Retrieves the full identification evidence record as JSON for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identification result for the completed identification process. The exact schema depends on the
            identification provider configuration and is available on request.

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_identification_evidence_json(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    async def get_identification_evidence_jwt(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Retrieves the signed JWT for the identification evidence. Useful for cryptographic verification or downstream
        integration purposes.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_identification_evidence_jwt(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    async def get_identification_evidence_status(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IdentificationEvidenceStatusResponse:
        """Returns the current status of the identification evidence for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must have been initiated (``evidence_id`` is required,
        available in ``signer_identity_data.evidence_id`` of the ``SignatureRequest`` response).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized Access denied Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_identification_evidence_status(
                sr_id, evidence_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIdentificationWithRawResponse:
        return self._with_raw_response


class IdentificationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_identification_evidence_files(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, GetIdentificationEvidenceFilesErrorBody]:
        """Downloads all files related to the identification evidence as a ZIP archive.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=get_identification_evidence_files_error_mapper,
            request_options=request_options,
        )

    def get_identification_evidence_json(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetIdentificationEvidenceJsonErrorBody]:
        """Retrieves the full identification evidence record as JSON for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[Any],
            error_mapper=get_identification_evidence_json_error_mapper,
            request_options=request_options,
        )

    def get_identification_evidence_jwt(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, GetIdentificationEvidenceJwtErrorBody]:
        """Retrieves the signed JWT for the identification evidence. Useful for cryptographic verification or downstream
        integration purposes.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=text_decoder[str],
            error_mapper=get_identification_evidence_jwt_error_mapper,
            request_options=request_options,
        )

    def get_identification_evidence_status(
        self, sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IdentificationEvidenceStatusResponse, GetIdentificationEvidenceStatusErrorBody]:
        """Returns the current status of the identification evidence for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must have been initiated (``evidence_id`` is required,
        available in ``signer_identity_data.evidence_id`` of the ``SignatureRequest`` response).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[IdentificationEvidenceStatusResponse],
            error_mapper=get_identification_evidence_status_error_mapper,
            request_options=request_options,
        )


class AsyncIdentificationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_identification_evidence_files(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, GetIdentificationEvidenceFilesErrorBody]:
        """Downloads all files related to the identification evidence as a ZIP archive.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=get_identification_evidence_files_error_mapper,
            request_options=request_options,
        )

    async def get_identification_evidence_json(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetIdentificationEvidenceJsonErrorBody]:
        """Retrieves the full identification evidence record as JSON for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[Any],
            error_mapper=get_identification_evidence_json_error_mapper,
            request_options=request_options,
        )

    async def get_identification_evidence_jwt(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, GetIdentificationEvidenceJwtErrorBody]:
        """Retrieves the signed JWT for the identification evidence. Useful for cryptographic verification or downstream
        integration purposes.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must be completed (``evidence_id`` is required).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_text_decoder[str],
            error_mapper=get_identification_evidence_jwt_error_mapper,
            request_options=request_options,
        )

    async def get_identification_evidence_status(
        self, sr_id: UUID, evidence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IdentificationEvidenceStatusResponse, GetIdentificationEvidenceStatusErrorBody]:
        """Returns the current status of the identification evidence for the given ``SignatureRequest`` and
        ``evidence_id``.

        **Requirements:**
        - The business must have identification evidence enabled. If it is not,
        the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).
        - The identification process must have been initiated (``evidence_id`` is required,
        available in ``signer_identity_data.evidence_id`` of the ``SignatureRequest`` response).

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            evidence_id: Unique ID of the identification evidence record, available in the
                ``signer_identity_data.evidence_id`` field of the SignatureRequest response once identification is
                complete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_identification_api(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[str]("EVIDENCE_ID", evidence_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[IdentificationEvidenceStatusResponse],
            error_mapper=get_identification_evidence_status_error_mapper,
            request_options=request_options,
        )
