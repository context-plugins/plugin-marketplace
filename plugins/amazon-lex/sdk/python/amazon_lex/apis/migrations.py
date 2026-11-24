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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_migration_error import GetMigrationErrorBody, get_migration_error_mapper
from ..errors.get_migrations_error import GetMigrationsErrorBody, get_migrations_error_mapper
from ..errors.start_migration_error import StartMigrationErrorBody, start_migration_error_mapper
from ..models.get_migration_response import GetMigrationResponse
from ..models.get_migrations_response import GetMigrationsResponse
from ..models.start_migration_request import StartMigrationRequest, StartMigrationRequestDict
from ..models.start_migration_response import StartMigrationResponse
from ..server.server import Server


class Migrations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MigrationsWithRawResponse(client, server, auth)

    def get_migration(
        self, migration_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetMigrationResponse:
        """Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot.
        Use this operation to view the migration alerts and warnings related to the migration.

        Args:
            migration_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_migration(migration_id, request_options=request_options))

    def get_migrations(self, *, request_options: RequestOptionsOrDict | None = None) -> GetMigrationsResponse:
        """Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_migrations(request_options=request_options))

    def start_migration(
        self,
        *,
        body: StartMigrationRequest | StartMigrationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartMigrationResponse:
        """Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage
        of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer
        guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | ModelsLexAccessDeniedException |
                NotFoundException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.start_migration(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> MigrationsWithRawResponse:
        return self._with_raw_response


class AsyncMigrations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMigrationsWithRawResponse(client, server, auth)

    async def get_migration(
        self, migration_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMigrationResponse:
        """Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot.
        Use this operation to view the migration alerts and warnings related to the migration.

        Args:
            migration_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_migration(migration_id, request_options=request_options))

    async def get_migrations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMigrationsResponse:
        """Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_migrations(request_options=request_options))

    async def start_migration(
        self,
        *,
        body: StartMigrationRequest | StartMigrationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartMigrationResponse:
        """Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage
        of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer
        guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | ModelsLexAccessDeniedException |
                NotFoundException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.start_migration(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMigrationsWithRawResponse:
        return self._with_raw_response


class MigrationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_migration(
        self, migration_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMigrationResponse, GetMigrationErrorBody]:
        """Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot.
        Use this operation to view the migration alerts and warnings related to the migration.

        Args:
            migration_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/migrations/{migrationId}"),
            path_params=[param[str]("migrationId", migration_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetMigrationResponse],
            error_mapper=get_migration_error_mapper,
            request_options=request_options,
        )

    def get_migrations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMigrationsResponse, GetMigrationsErrorBody]:
        """Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/migrations"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetMigrationsResponse],
            error_mapper=get_migrations_error_mapper,
            request_options=request_options,
        )

    def start_migration(
        self,
        *,
        body: StartMigrationRequest | StartMigrationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMigrationResponse, StartMigrationErrorBody]:
        """Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage
        of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer
        guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/migrations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartMigrationRequest | StartMigrationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartMigrationResponse],
            error_mapper=start_migration_error_mapper,
            request_options=request_options,
        )


class AsyncMigrationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_migration(
        self, migration_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMigrationResponse, GetMigrationErrorBody]:
        """Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot.
        Use this operation to view the migration alerts and warnings related to the migration.

        Args:
            migration_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/migrations/{migrationId}"),
            path_params=[param[str]("migrationId", migration_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetMigrationResponse],
            error_mapper=get_migration_error_mapper,
            request_options=request_options,
        )

    async def get_migrations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMigrationsResponse, GetMigrationsErrorBody]:
        """Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/migrations"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetMigrationsResponse],
            error_mapper=get_migrations_error_mapper,
            request_options=request_options,
        )

    async def start_migration(
        self,
        *,
        body: StartMigrationRequest | StartMigrationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMigrationResponse, StartMigrationErrorBody]:
        """Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage
        of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer
        guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/migrations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartMigrationRequest | StartMigrationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartMigrationResponse],
            error_mapper=start_migration_error_mapper,
            request_options=request_options,
        )
