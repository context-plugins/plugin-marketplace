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
from ..errors.describe_acme_account_error import DescribeAcmeAccountErrorBody, describe_acme_account_error_mapper
from ..errors.list_acme_accounts_error import ListAcmeAccountsErrorBody, list_acme_accounts_error_mapper
from ..errors.revoke_acme_account_error import RevokeAcmeAccountErrorBody, revoke_acme_account_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..server.server import Server


class AcmeAccountApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AcmeAccountApiWithRawResponse(client, server, auth)

    def describe_acme_account(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and
        associated external account binding.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_acme_account(x_amz_target, request_options=request_options))

    def list_acme_accounts(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when
        clients use external account binding credentials to register.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_acme_accounts(x_amz_target, request_options=request_options))

    def revoke_acme_account(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is
        irreversible.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.revoke_acme_account(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AcmeAccountApiWithRawResponse:
        return self._with_raw_response


class AsyncAcmeAccountApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAcmeAccountApiWithRawResponse(client, server, auth)

    async def describe_acme_account(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and
        associated external account binding.

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
            await self._with_raw_response.describe_acme_account(x_amz_target, request_options=request_options)
        )

    async def list_acme_accounts(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when
        clients use external account binding credentials to register.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_acme_accounts(x_amz_target, request_options=request_options))

    async def revoke_acme_account(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is
        irreversible.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; ResourceNotFoundException; ThrottlingException;
                ValidationException InternalServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.revoke_acme_account(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAcmeAccountApiWithRawResponse:
        return self._with_raw_response


class AcmeAccountApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_acme_account(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeAcmeAccountErrorBody]:
        """Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and
        associated external account binding.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeAccount"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_acme_account_error_mapper,
            request_options=request_options,
        )

    def list_acme_accounts(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAcmeAccountsErrorBody]:
        """Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when
        clients use external account binding credentials to register.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeAccounts"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_acme_accounts_error_mapper,
            request_options=request_options,
        )

    def revoke_acme_account(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeAcmeAccountErrorBody]:
        """Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is
        irreversible.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeAcmeAccount"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=revoke_acme_account_error_mapper,
            request_options=request_options,
        )


class AsyncAcmeAccountApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_acme_account(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeAcmeAccountErrorBody]:
        """Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and
        associated external account binding.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAcmeAccount"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_acme_account_error_mapper,
            request_options=request_options,
        )

    async def list_acme_accounts(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAcmeAccountsErrorBody]:
        """Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when
        clients use external account binding credentials to register.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAcmeAccounts"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_acme_accounts_error_mapper,
            request_options=request_options,
        )

    async def revoke_acme_account(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeAcmeAccountErrorBody]:
        """Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is
        irreversible.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeAcmeAccount"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=revoke_acme_account_error_mapper,
            request_options=request_options,
        )
