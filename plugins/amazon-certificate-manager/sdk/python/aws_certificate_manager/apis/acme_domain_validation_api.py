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
    empty_response,
    param,
    unwrap,
)
from ..errors.create_acme_domain_validation_error import (
    CreateAcmeDomainValidationErrorBody,
    create_acme_domain_validation_error_mapper,
)
from ..errors.delete_acme_domain_validation_error import (
    DeleteAcmeDomainValidationErrorBody,
    delete_acme_domain_validation_error_mapper,
)
from ..errors.describe_acme_domain_validation_error import (
    DescribeAcmeDomainValidationErrorBody,
    describe_acme_domain_validation_error_mapper,
)
from ..errors.list_acme_domain_validations_error import (
    ListAcmeDomainValidationsErrorBody,
    list_acme_domain_validations_error_mapper,
)
from ..errors.update_acme_domain_validation_error import (
    UpdateAcmeDomainValidationErrorBody,
    update_acme_domain_validation_error_mapper,
)
from ..models.enums.x_amz_target1_aws_certificate_manager_acme_domain_validation_api import (
    XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr,
)
from ..models.enums.x_amz_target2_aws_certificate_manager_acme_domain_validation_api import (
    XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr,
)
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target_aws_certificate_manager_acme_domain_validation_api import (
    XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr,
)
from ..server.server import Server


class AcmeDomainValidationApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AcmeDomainValidationApiWithRawResponse(client, server, auth)

    def create_acme_domain_validation(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue
        certificates for specified domain names. You configure prevalidation to prove domain ownership.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ServiceQuotaExceededException;
                ThrottlingException; ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    def delete_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the
        associated domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    def describe_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS
        resource records required for validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    def list_acme_domain_validations(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of domain validations for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_acme_domain_validations(x_amz_target, request_options=request_options)
        )

    def update_acme_domain_validation(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the prevalidation configuration of an existing domain validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AcmeDomainValidationApiWithRawResponse:
        return self._with_raw_response


class AsyncAcmeDomainValidationApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAcmeDomainValidationApiWithRawResponse(client, server, auth)

    async def create_acme_domain_validation(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue
        certificates for specified domain names. You configure prevalidation to prove domain ownership.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ServiceQuotaExceededException;
                ThrottlingException; ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    async def delete_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the
        associated domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    async def describe_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS
        resource records required for validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    async def list_acme_domain_validations(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of domain validations for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_acme_domain_validations(x_amz_target, request_options=request_options)
        )

    async def update_acme_domain_validation(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the prevalidation configuration of an existing domain validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_acme_domain_validation(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAcmeDomainValidationApiWithRawResponse:
        return self._with_raw_response


class AcmeDomainValidationApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_acme_domain_validation(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeDomainValidationErrorBody]:
        """Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue
        certificates for specified domain names. You configure prevalidation to prove domain ownership.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeDomainValidation"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    def delete_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeDomainValidationErrorBody]:
        """Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the
        associated domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeDomainValidation"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    def describe_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeDomainValidationErrorBody]:
        """Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS
        resource records required for validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeDomainValidation"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    def list_acme_domain_validations(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAcmeDomainValidationsErrorBody]:
        """Retrieves a list of domain validations for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeDomainValidations"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_acme_domain_validations_error_mapper,
            request_options=request_options,
        )

    def update_acme_domain_validation(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateAcmeDomainValidationErrorBody]:
        """Updates the prevalidation configuration of an existing domain validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAcmeDomainValidation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_acme_domain_validation_error_mapper,
            request_options=request_options,
        )


class AsyncAcmeDomainValidationApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_acme_domain_validation(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeDomainValidationErrorBody]:
        """Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue
        certificates for specified domain names. You configure prevalidation to prove domain ownership.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeDomainValidation"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    async def delete_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeDomainValidationErrorBody]:
        """Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the
        associated domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeDomainValidation"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    async def describe_acme_domain_validation(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeDomainValidationErrorBody]:
        """Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS
        resource records required for validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeDomainValidation"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_acme_domain_validation_error_mapper,
            request_options=request_options,
        )

    async def list_acme_domain_validations(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAcmeDomainValidationsErrorBody]:
        """Retrieves a list of domain validations for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeDomainValidations"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_acme_domain_validations_error_mapper,
            request_options=request_options,
        )

    async def update_acme_domain_validation(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateAcmeDomainValidationErrorBody]:
        """Updates the prevalidation configuration of an existing domain validation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAcmeDomainValidation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_acme_domain_validation_error_mapper,
            request_options=request_options,
        )
