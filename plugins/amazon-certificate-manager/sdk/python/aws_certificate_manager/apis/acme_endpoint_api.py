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
from ..errors.create_acme_endpoint_error import CreateAcmeEndpointErrorBody, create_acme_endpoint_error_mapper
from ..errors.delete_acme_endpoint_error import DeleteAcmeEndpointErrorBody, delete_acme_endpoint_error_mapper
from ..errors.describe_acme_endpoint_error import DescribeAcmeEndpointErrorBody, describe_acme_endpoint_error_mapper
from ..errors.list_acme_endpoints_error import ListAcmeEndpointsErrorBody, list_acme_endpoints_error_mapper
from ..errors.update_acme_endpoint_error import UpdateAcmeEndpointErrorBody, update_acme_endpoint_error_mapper
from ..models.enums.x_amz_target1_aws_certificate_manager_acme_endpoint_api import (
    XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr,
)
from ..models.enums.x_amz_target2_aws_certificate_manager_acme_endpoint_api import (
    XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr,
)
from ..models.enums.x_amz_target3_aws_certificate_manager_acme_endpoint_api import (
    XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr,
)
from ..models.enums.x_amz_target4_aws_certificate_manager_acme_endpoint_api import (
    XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr,
)
from ..models.enums.x_amz_target_aws_certificate_manager_acme_endpoint_api import (
    XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr,
)
from ..server.server import Server


class AcmeEndpointApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AcmeEndpointApiWithRawResponse(client, server, auth)

    def create_acme_endpoint(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME
        clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ServiceQuotaExceededException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_acme_endpoint(x_amz_target, request_options=request_options))

    def delete_acme_endpoint(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot
        issue certificates through it. Any existing external account bindings and domain validations associated with the
        endpoint are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_acme_endpoint(x_amz_target, request_options=request_options))

    def describe_acme_endpoint(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization
        behavior, and certificate authority configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_acme_endpoint(x_amz_target, request_options=request_options))

    def list_acme_endpoints(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints
        and their current status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException; ValidationException ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.list_acme_endpoints(x_amz_target, request_options=request_options))

    def update_acme_endpoint(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact
        requirement, or certificate authority settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_acme_endpoint(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AcmeEndpointApiWithRawResponse:
        return self._with_raw_response


class AsyncAcmeEndpointApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAcmeEndpointApiWithRawResponse(client, server, auth)

    async def create_acme_endpoint(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME
        clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ServiceQuotaExceededException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_acme_endpoint(x_amz_target, request_options=request_options))

    async def delete_acme_endpoint(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot
        issue certificates through it. Any existing external account bindings and domain validations associated with the
        endpoint are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ThrottlingException; ValidationException
                InternalServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_acme_endpoint(x_amz_target, request_options=request_options))

    async def describe_acme_endpoint(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization
        behavior, and certificate authority configuration.

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
            await self._with_raw_response.describe_acme_endpoint(x_amz_target, request_options=request_options)
        )

    async def list_acme_endpoints(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints
        and their current status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException; ValidationException ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.list_acme_endpoints(x_amz_target, request_options=request_options))

    async def update_acme_endpoint(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact
        requirement, or certificate authority settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_acme_endpoint(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAcmeEndpointApiWithRawResponse:
        return self._with_raw_response


class AcmeEndpointApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_acme_endpoint(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeEndpointErrorBody]:
        """Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME
        clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeEndpoint"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    def delete_acme_endpoint(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeEndpointErrorBody]:
        """Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot
        issue certificates through it. Any existing external account bindings and domain validations associated with the
        endpoint are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeEndpoint"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    def describe_acme_endpoint(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeEndpointErrorBody]:
        """Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization
        behavior, and certificate authority configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeEndpoint"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    def list_acme_endpoints(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListAcmeEndpointsErrorBody]:
        """Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints
        and their current status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeEndpoints"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_acme_endpoints_error_mapper,
            request_options=request_options,
        )

    def update_acme_endpoint(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateAcmeEndpointErrorBody]:
        """Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact
        requirement, or certificate authority settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAcmeEndpoint"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_acme_endpoint_error_mapper,
            request_options=request_options,
        )


class AsyncAcmeEndpointApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_acme_endpoint(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAcmeEndpointErrorBody]:
        """Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME
        clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAcmeEndpoint"),
            headers=[
                param[XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    async def delete_acme_endpoint(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAcmeEndpointErrorBody]:
        """Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot
        issue certificates through it. Any existing external account bindings and domain validations associated with the
        endpoint are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAcmeEndpoint"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    async def describe_acme_endpoint(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAcmeEndpointErrorBody]:
        """Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization
        behavior, and certificate authority configuration.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeEndpoint"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_acme_endpoint_error_mapper,
            request_options=request_options,
        )

    async def list_acme_endpoints(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListAcmeEndpointsErrorBody]:
        """Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints
        and their current status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeEndpoints"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_acme_endpoints_error_mapper,
            request_options=request_options,
        )

    async def update_acme_endpoint(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateAcmeEndpointErrorBody]:
        """Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact
        requirement, or certificate authority settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAcmeEndpoint"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_acme_endpoint_error_mapper,
            request_options=request_options,
        )
