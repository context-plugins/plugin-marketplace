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
from ..errors.create_acme_external_account_binding_error import (
    CreateAcmeExternalAccountBindingErrorBody,
    create_acme_external_account_binding_error_mapper,
)
from ..errors.delete_acme_external_account_binding_error import (
    DeleteAcmeExternalAccountBindingErrorBody,
    delete_acme_external_account_binding_error_mapper,
)
from ..errors.describe_acme_external_account_binding_error import (
    DescribeAcmeExternalAccountBindingErrorBody,
    describe_acme_external_account_binding_error_mapper,
)
from ..errors.list_acme_external_account_bindings_error import (
    ListAcmeExternalAccountBindingsErrorBody,
    list_acme_external_account_bindings_error_mapper,
)
from ..errors.revoke_acme_external_account_binding_error import (
    RevokeAcmeExternalAccountBindingErrorBody,
    revoke_acme_external_account_binding_error_mapper,
)
from ..models.enums.x_amz_target1_aws_certificate_manager_acme_external_account_binding_api import (
    XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
)
from ..models.enums.x_amz_target2_aws_certificate_manager_acme_external_account_binding_api import (
    XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
)
from ..models.enums.x_amz_target3_aws_certificate_manager_acme_external_account_binding_api import (
    XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
)
from ..models.enums.x_amz_target4_aws_certificate_manager_acme_external_account_binding_api import (
    XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
)
from ..models.enums.x_amz_target_aws_certificate_manager_acme_external_account_binding_api import (
    XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
)
from ..server.server import Server


class AcmeExternalAccountBindingApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AcmeExternalAccountBindingApiWithRawResponse(client, server, auth)

    def create_acme_external_account_binding(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an
        ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what
        certificate operations the ACME client can perform.

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
            self._with_raw_response.create_acme_external_account_binding(x_amz_target, request_options=request_options)
        )

    def delete_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable
        for account registration. A deleted binding cannot be recovered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException; ValidationException ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_acme_external_account_binding(x_amz_target, request_options=request_options)
        )

    def describe_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified external account binding, including the associated IAM role,
        expiration time, and usage history.

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
            self._with_raw_response.describe_acme_external_account_binding(
                x_amz_target, request_options=request_options
            ),
        )

    def list_acme_external_account_bindings(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a list of external account bindings for the specified ACME endpoint.

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
            self._with_raw_response.list_acme_external_account_bindings(x_amz_target, request_options=request_options)
        )

    def revoke_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Revokes an external account binding, preventing new ACME accounts from being registered using this binding.
        Existing ACME accounts that were previously registered using the binding are not affected and must be revoked
        separately.

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
            self._with_raw_response.revoke_acme_external_account_binding(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AcmeExternalAccountBindingApiWithRawResponse:
        return self._with_raw_response


class AsyncAcmeExternalAccountBindingApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAcmeExternalAccountBindingApiWithRawResponse(client, server, auth)

    async def create_acme_external_account_binding(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an
        ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what
        certificate operations the ACME client can perform.

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
            await self._with_raw_response.create_acme_external_account_binding(
                x_amz_target, request_options=request_options
            ),
        )

    async def delete_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable
        for account registration. A deleted binding cannot be recovered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException; ValidationException ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_acme_external_account_binding(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified external account binding, including the associated IAM role,
        expiration time, and usage history.

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
            await self._with_raw_response.describe_acme_external_account_binding(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_acme_external_account_bindings(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a list of external account bindings for the specified ACME endpoint.

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
            await self._with_raw_response.list_acme_external_account_bindings(
                x_amz_target, request_options=request_options
            ),
        )

    async def revoke_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Revokes an external account binding, preventing new ACME accounts from being registered using this binding.
        Existing ACME accounts that were previously registered using the binding are not affected and must be revoked
        separately.

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
            await self._with_raw_response.revoke_acme_external_account_binding(
                x_amz_target, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAcmeExternalAccountBindingApiWithRawResponse:
        return self._with_raw_response


class AcmeExternalAccountBindingApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_acme_external_account_binding(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeExternalAccountBindingErrorBody]:
        """Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an
        ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what
        certificate operations the ACME client can perform.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    def delete_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeExternalAccountBindingErrorBody]:
        """Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable
        for account registration. A deleted binding cannot be recovered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    def describe_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeExternalAccountBindingErrorBody]:
        """Returns detailed metadata about the specified external account binding, including the associated IAM role,
        expiration time, and usage history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    def list_acme_external_account_bindings(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListAcmeExternalAccountBindingsErrorBody]:
        """Retrieves a list of external account bindings for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeExternalAccountBindings"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_acme_external_account_bindings_error_mapper,
            request_options=request_options,
        )

    def revoke_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RevokeAcmeExternalAccountBindingErrorBody]:
        """Revokes an external account binding, preventing new ACME accounts from being registered using this binding.
        Existing ACME accounts that were previously registered using the binding are not affected and must be revoked
        separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=revoke_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )


class AsyncAcmeExternalAccountBindingApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_acme_external_account_binding(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeExternalAccountBindingErrorBody]:
        """Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an
        ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what
        certificate operations the ACME client can perform.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    async def delete_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeExternalAccountBindingErrorBody]:
        """Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable
        for account registration. A deleted binding cannot be recovered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    async def describe_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeExternalAccountBindingErrorBody]:
        """Returns detailed metadata about the specified external account binding, including the associated IAM role,
        expiration time, and usage history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )

    async def list_acme_external_account_bindings(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListAcmeExternalAccountBindingsErrorBody]:
        """Retrieves a list of external account bindings for the specified ACME endpoint.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeExternalAccountBindings"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_acme_external_account_bindings_error_mapper,
            request_options=request_options,
        )

    async def revoke_acme_external_account_binding(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RevokeAcmeExternalAccountBindingErrorBody]:
        """Revokes an external account binding, preventing new ACME accounts from being registered using this binding.
        Existing ACME accounts that were previously registered using the binding are not affected and must be revoked
        separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeAcmeExternalAccountBinding"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=revoke_acme_external_account_binding_error_mapper,
            request_options=request_options,
        )
