from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.fetch_account_documents_error import FetchAccountDocumentsErrorBody, fetch_account_documents_error_mapper
from ..errors.fetch_stakeholder_documents_error import (
    FetchStakeholderDocumentsErrorBody,
    fetch_stakeholder_documents_error_mapper,
)
from ..errors.upload_account_documents_error import (
    UploadAccountDocumentsErrorBody,
    upload_account_documents_error_mapper,
)
from ..errors.upload_stakeholder_documents_error import (
    UploadStakeholderDocumentsErrorBody,
    upload_stakeholder_documents_error_mapper,
)
from ..models.account_document import AccountDocument
from ..models.enums.document_type import DocumentTypeOrStr
from ..models.enums.document_type1 import DocumentType1OrStr
from ..models.stakeholder_document import StakeholderDocument
from ..server.server import Server


class PartnerDocuments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerDocumentsWithRawResponse(client, server, auth)

    def fetch_account_documents(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AccountDocument:
        """Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account documents

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_account_documents(account_id, request_options=request_options))

    def fetch_stakeholder_documents(
        self, account_id: str, stakeholder_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> StakeholderDocument:
        """Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder documents

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_stakeholder_documents(
                account_id, stakeholder_id, request_options=request_options
            ),
        )

    def upload_account_documents(
        self,
        account_id: str,
        *,
        document_type: DocumentTypeOrStr | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AccountDocument:
        """Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB,
        PDF max 2MB. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.upload_account_documents(
                account_id, document_type=document_type, file=file, request_options=request_options
            ),
        )

    def upload_stakeholder_documents(
        self,
        account_id: str,
        stakeholder_id: str,
        *,
        document_type: DocumentType1OrStr | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StakeholderDocument:
        """Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back),
        passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.upload_stakeholder_documents(
                account_id, stakeholder_id, document_type=document_type, file=file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PartnerDocumentsWithRawResponse:
        return self._with_raw_response


class AsyncPartnerDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerDocumentsWithRawResponse(client, server, auth)

    async def fetch_account_documents(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountDocument:
        """Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account documents

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_account_documents(account_id, request_options=request_options)
        )

    async def fetch_stakeholder_documents(
        self, account_id: str, stakeholder_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StakeholderDocument:
        """Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder documents

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_stakeholder_documents(
                account_id, stakeholder_id, request_options=request_options
            ),
        )

    async def upload_account_documents(
        self,
        account_id: str,
        *,
        document_type: DocumentTypeOrStr | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AccountDocument:
        """Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB,
        PDF max 2MB. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_account_documents(
                account_id, document_type=document_type, file=file, request_options=request_options
            ),
        )

    async def upload_stakeholder_documents(
        self,
        account_id: str,
        stakeholder_id: str,
        *,
        document_type: DocumentType1OrStr | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StakeholderDocument:
        """Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back),
        passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_stakeholder_documents(
                account_id, stakeholder_id, document_type=document_type, file=file, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerDocumentsWithRawResponse:
        return self._with_raw_response


class PartnerDocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_account_documents(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountDocument, FetchAccountDocumentsErrorBody]:
        """Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/documents"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[AccountDocument],
            error_mapper=fetch_account_documents_error_mapper,
            request_options=request_options,
        )

    def fetch_stakeholder_documents(
        self, account_id: str, stakeholder_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StakeholderDocument, FetchStakeholderDocumentsErrorBody]:
        """Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[StakeholderDocument],
            error_mapper=fetch_stakeholder_documents_error_mapper,
            request_options=request_options,
        )

    def upload_account_documents(
        self,
        account_id: str,
        *,
        document_type: DocumentTypeOrStr | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountDocument, UploadAccountDocumentsErrorBody]:
        """Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB,
        PDF max 2MB. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/documents"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[DocumentTypeOrStr | None]("document_type", document_type),
                file_part("file", file) if file is not None else None,
            ),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[AccountDocument],
            error_mapper=upload_account_documents_error_mapper,
            request_options=request_options,
        )

    def upload_stakeholder_documents(
        self,
        account_id: str,
        stakeholder_id: str,
        *,
        document_type: DocumentType1OrStr | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderDocument, UploadStakeholderDocumentsErrorBody]:
        """Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back),
        passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[DocumentType1OrStr | None]("document_type", document_type),
                file_part("file", file) if file is not None else None,
            ),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[StakeholderDocument],
            error_mapper=upload_stakeholder_documents_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_account_documents(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountDocument, FetchAccountDocumentsErrorBody]:
        """Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/documents"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[AccountDocument],
            error_mapper=fetch_account_documents_error_mapper,
            request_options=request_options,
        )

    async def fetch_stakeholder_documents(
        self, account_id: str, stakeholder_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StakeholderDocument, FetchStakeholderDocumentsErrorBody]:
        """Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[StakeholderDocument],
            error_mapper=fetch_stakeholder_documents_error_mapper,
            request_options=request_options,
        )

    async def upload_account_documents(
        self,
        account_id: str,
        *,
        document_type: DocumentTypeOrStr | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountDocument, UploadAccountDocumentsErrorBody]:
        """Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB,
        PDF max 2MB. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/documents"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[DocumentTypeOrStr | None]("document_type", document_type),
                file_part("file", file) if file is not None else None,
            ),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[AccountDocument],
            error_mapper=upload_account_documents_error_mapper,
            request_options=request_options,
        )

    async def upload_stakeholder_documents(
        self,
        account_id: str,
        stakeholder_id: str,
        *,
        document_type: DocumentType1OrStr | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderDocument, UploadStakeholderDocumentsErrorBody]:
        """Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back),
        passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            stakeholder_id: Unique identifier of the stakeholder (e.g. ``sth_00000000000001``).
            document_type: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[DocumentType1OrStr | None]("document_type", document_type),
                file_part("file", file) if file is not None else None,
            ),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[StakeholderDocument],
            error_mapper=upload_stakeholder_documents_error_mapper,
            request_options=request_options,
        )
