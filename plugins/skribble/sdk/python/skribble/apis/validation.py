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
    async_empty_response,
    async_json_decoder,
    empty_response,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_validation_error import DeleteValidationErrorBody, delete_validation_error_mapper
from ..errors.post_validate_document_error import PostValidateDocumentErrorBody, post_validate_document_error_mapper
from ..errors.post_validate_signature_error import PostValidateSignatureErrorBody, post_validate_signature_error_mapper
from ..models.document_validation_response import DocumentValidationResponse
from ..models.enums.info import InfoOrStr
from ..models.enums.legislation import LegislationOrStr
from ..models.enums.quality import QualityOrStr
from ..models.signature_validation_response import SignatureValidationResponse
from ..server.server import Server


class Validation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ValidationWithRawResponse(client, server, auth)

    def delete_validation(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes the corresponding resource identified by {id}, universal for all validation resources. Any resource
        that is not manually deleted will be automatically deleted after 10 minutes.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.delete_validation(id_, request_options=request_options))

    def post_validate_document(
        self,
        content: FileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        reject_visual_differences: bool | None = None,
        reject_undefined_changes: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocumentValidationResponse:
        """Validate signatures in digitally signed content, such as a PDF or XML file. A validation ID {id} is returned
        that can be used to call additional endpoints. The content to be validated is provided in the request body and
        is not retained within our service. The maximum request or file size is 50MB. Request parameters can be used to
        set optional parameters to control the validation

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            reject_visual_differences: Optional flag to specify if visual differences should be rejected. If 'true',
                validation will fail due to visual differences; if 'false' or not provided, visual differences will not
                cause validation to fail.
            reject_undefined_changes: Optional flag to specify if undefined changes should be rejected. If 'true',
                validation will fail due to undefined changes; if 'false' or not provided, undefined changes will not
                cause validation to fail.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Content too large Unsupported media type Too many requests
                Internal server error Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_validate_document(
                content,
                quality=quality,
                long_term_validation=long_term_validation,
                legislation=legislation,
                infos=infos,
                reject_visual_differences=reject_visual_differences,
                reject_undefined_changes=reject_undefined_changes,
                request_options=request_options,
            ),
        )

    def post_validate_signature(
        self,
        content: FileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureValidationResponse:
        """Validate digital signatures such as CMS and CAdES without providing the associated signed content. A
        validation ID {id} is returned that can be used to call additional endpoints. The signature to be validated is
        provided in the request body. Query parameters can be used to set optional parameters to control the validation.

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Unsupported media type Too many requests Internal server error
                Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            self._with_raw_response.post_validate_signature(
                content,
                quality=quality,
                long_term_validation=long_term_validation,
                legislation=legislation,
                infos=infos,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ValidationWithRawResponse:
        return self._with_raw_response


class AsyncValidation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncValidationWithRawResponse(client, server, auth)

    async def delete_validation(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes the corresponding resource identified by {id}, universal for all validation resources. Any resource
        that is not manually deleted will be automatically deleted after 10 minutes.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.delete_validation(id_, request_options=request_options))

    async def post_validate_document(
        self,
        content: AsyncFileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        reject_visual_differences: bool | None = None,
        reject_undefined_changes: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentValidationResponse:
        """Validate signatures in digitally signed content, such as a PDF or XML file. A validation ID {id} is returned
        that can be used to call additional endpoints. The content to be validated is provided in the request body and
        is not retained within our service. The maximum request or file size is 50MB. Request parameters can be used to
        set optional parameters to control the validation

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            reject_visual_differences: Optional flag to specify if visual differences should be rejected. If 'true',
                validation will fail due to visual differences; if 'false' or not provided, visual differences will not
                cause validation to fail.
            reject_undefined_changes: Optional flag to specify if undefined changes should be rejected. If 'true',
                validation will fail due to undefined changes; if 'false' or not provided, undefined changes will not
                cause validation to fail.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Content too large Unsupported media type Too many requests
                Internal server error Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_validate_document(
                content,
                quality=quality,
                long_term_validation=long_term_validation,
                legislation=legislation,
                infos=infos,
                reject_visual_differences=reject_visual_differences,
                reject_undefined_changes=reject_undefined_changes,
                request_options=request_options,
            ),
        )

    async def post_validate_signature(
        self,
        content: AsyncFileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureValidationResponse:
        """Validate digital signatures such as CMS and CAdES without providing the associated signed content. A
        validation ID {id} is returned that can be used to call additional endpoints. The signature to be validated is
        provided in the request body. Query parameters can be used to set optional parameters to control the validation.

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Unsupported media type Too many requests Internal server error
                Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            await self._with_raw_response.post_validate_signature(
                content,
                quality=quality,
                long_term_validation=long_term_validation,
                legislation=legislation,
                infos=infos,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncValidationWithRawResponse:
        return self._with_raw_response


class ValidationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_validation(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteValidationErrorBody]:
        """Deletes the corresponding resource identified by {id}, universal for all validation resources. Any resource
        that is not manually deleted will be automatically deleted after 10 minutes.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_additional_information_api("/validate/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_validation_error_mapper,
            request_options=request_options,
        )

    def post_validate_document(
        self,
        content: FileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        reject_visual_differences: bool | None = None,
        reject_undefined_changes: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentValidationResponse, PostValidateDocumentErrorBody]:
        """Validate signatures in digitally signed content, such as a PDF or XML file. A validation ID {id} is returned
        that can be used to call additional endpoints. The content to be validated is provided in the request body and
        is not retained within our service. The maximum request or file size is 50MB. Request parameters can be used to
        set optional parameters to control the validation

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            reject_visual_differences: Optional flag to specify if visual differences should be rejected. If 'true',
                validation will fail due to visual differences; if 'false' or not provided, visual differences will not
                cause validation to fail.
            reject_undefined_changes: Optional flag to specify if undefined changes should be rejected. If 'true',
                validation will fail due to undefined changes; if 'false' or not provided, undefined changes will not
                cause validation to fail.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_additional_information_api("/validate/document"),
            query_params=[
                param[QualityOrStr | None]("quality", quality),
                param[bool | None]("longTermValidation", long_term_validation),
                param[LegislationOrStr | None]("legislation", legislation),
                param[list[InfoOrStr] | None]("infos", infos),
                param[bool | None]("rejectVisualDifferences", reject_visual_differences),
                param[bool | None]("rejectUndefinedChanges", reject_undefined_changes),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("content", content)),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[DocumentValidationResponse],
            error_mapper=post_validate_document_error_mapper,
            request_options=request_options,
        )

    def post_validate_signature(
        self,
        content: FileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureValidationResponse, PostValidateSignatureErrorBody]:
        """Validate digital signatures such as CMS and CAdES without providing the associated signed content. A
        validation ID {id} is returned that can be used to call additional endpoints. The signature to be validated is
        provided in the request body. Query parameters can be used to set optional parameters to control the validation.

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_additional_information_api("/validate/signature"),
            query_params=[
                param[QualityOrStr | None]("quality", quality),
                param[bool | None]("longTermValidation", long_term_validation),
                param[LegislationOrStr | None]("legislation", legislation),
                param[list[InfoOrStr] | None]("infos", infos),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("content", content)),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureValidationResponse],
            error_mapper=post_validate_signature_error_mapper,
            request_options=request_options,
        )


class AsyncValidationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_validation(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteValidationErrorBody]:
        """Deletes the corresponding resource identified by {id}, universal for all validation resources. Any resource
        that is not manually deleted will be automatically deleted after 10 minutes.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_additional_information_api("/validate/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_validation_error_mapper,
            request_options=request_options,
        )

    async def post_validate_document(
        self,
        content: AsyncFileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        reject_visual_differences: bool | None = None,
        reject_undefined_changes: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentValidationResponse, PostValidateDocumentErrorBody]:
        """Validate signatures in digitally signed content, such as a PDF or XML file. A validation ID {id} is returned
        that can be used to call additional endpoints. The content to be validated is provided in the request body and
        is not retained within our service. The maximum request or file size is 50MB. Request parameters can be used to
        set optional parameters to control the validation

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            reject_visual_differences: Optional flag to specify if visual differences should be rejected. If 'true',
                validation will fail due to visual differences; if 'false' or not provided, visual differences will not
                cause validation to fail.
            reject_undefined_changes: Optional flag to specify if undefined changes should be rejected. If 'true',
                validation will fail due to undefined changes; if 'false' or not provided, undefined changes will not
                cause validation to fail.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_additional_information_api("/validate/document"),
            query_params=[
                param[QualityOrStr | None]("quality", quality),
                param[bool | None]("longTermValidation", long_term_validation),
                param[LegislationOrStr | None]("legislation", legislation),
                param[list[InfoOrStr] | None]("infos", infos),
                param[bool | None]("rejectVisualDifferences", reject_visual_differences),
                param[bool | None]("rejectUndefinedChanges", reject_undefined_changes),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("content", content)),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[DocumentValidationResponse],
            error_mapper=post_validate_document_error_mapper,
            request_options=request_options,
        )

    async def post_validate_signature(
        self,
        content: AsyncFileInput,
        *,
        quality: QualityOrStr | None = None,
        long_term_validation: bool | None = None,
        legislation: LegislationOrStr | None = None,
        infos: list[InfoOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureValidationResponse, PostValidateSignatureErrorBody]:
        """Validate digital signatures such as CMS and CAdES without providing the associated signed content. A
        validation ID {id} is returned that can be used to call additional endpoints. The signature to be validated is
        provided in the request body. Query parameters can be used to set optional parameters to control the validation.

        Args:
            content: File content to validate (PDF or XML)
            quality: Optional flag specifying the minimum signature quality required (SES, AES, QES).
            long_term_validation: Optional flag indicating whether the signature must be long-term valid.
            legislation: Optional jurisdiction (legal framework) the signature must satisfy: ``CH`` = Swiss law
                (ZertES), ``EU`` = EU law (eIDAS Regulation), ``CH_EU`` = both ZertES and eIDAS, ``WORLD`` = no specific
                jurisdiction (international). When set, the validation reports whether the signature meets the selected
                framework.
            infos: Optional flag to request additional information, such as validation, format, or signer details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_additional_information_api("/validate/signature"),
            query_params=[
                param[QualityOrStr | None]("quality", quality),
                param[bool | None]("longTermValidation", long_term_validation),
                param[LegislationOrStr | None]("legislation", legislation),
                param[list[InfoOrStr] | None]("infos", infos),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("content", content)),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureValidationResponse],
            error_mapper=post_validate_signature_error_mapper,
            request_options=request_options,
        )
