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
from ..errors.create_software_configuration_error import (
    CreateSoftwareConfigurationErrorBody,
    create_software_configuration_error_mapper,
)
from ..errors.delete_software_configuration_error import (
    DeleteSoftwareConfigurationErrorBody,
    delete_software_configuration_error_mapper,
)
from ..errors.describe_software_configuration_error import (
    DescribeSoftwareConfigurationErrorBody,
    describe_software_configuration_error_mapper,
)
from ..errors.list_software_configurations_error import (
    ListSoftwareConfigurationsErrorBody,
    list_software_configurations_error_mapper,
)
from ..errors.update_software_configuration_error import (
    UpdateSoftwareConfigurationErrorBody,
    update_software_configuration_error_mapper,
)
from ..models.create_software_configuration_request import (
    CreateSoftwareConfigurationRequest,
    CreateSoftwareConfigurationRequestDict,
)
from ..models.software_configuration import SoftwareConfiguration
from ..models.software_configuration_records_response import SoftwareConfigurationRecordsResponse
from ..models.update_software_configuration_request import (
    UpdateSoftwareConfigurationRequest,
    UpdateSoftwareConfigurationRequestDict,
)
from ..server.server import Server


class SoftwareConfigurations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SoftwareConfigurationsWithRawResponse(client, server, auth)

    def create_software_configuration(
        self,
        body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SoftwareConfiguration:
        """Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware
        platform.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_software_configuration(body, request_options=request_options))

    def delete_software_configuration(
        self, config_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_software_configuration(config_id, request_options=request_options))

    def describe_software_configuration(
        self, config_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SoftwareConfiguration:
        """Gets a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.describe_software_configuration(config_id, request_options=request_options)
        )

    def list_software_configurations(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SoftwareConfigurationRecordsResponse:
        """Lists FreeRTOS software configuration records.

        Args:
            max_results: Maximum results to return.
            next_token: Pagination token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_software_configurations(
                max_results=max_results, next_token=next_token, request_options=request_options
            ),
        )

    def update_software_configuration(
        self,
        config_id: str,
        body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SoftwareConfiguration:
        """Updates a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_software_configuration(config_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SoftwareConfigurationsWithRawResponse:
        return self._with_raw_response


class AsyncSoftwareConfigurations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSoftwareConfigurationsWithRawResponse(client, server, auth)

    async def create_software_configuration(
        self,
        body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SoftwareConfiguration:
        """Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware
        platform.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_software_configuration(body, request_options=request_options)
        )

    async def delete_software_configuration(
        self, config_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_software_configuration(config_id, request_options=request_options)
        )

    async def describe_software_configuration(
        self, config_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SoftwareConfiguration:
        """Gets a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_software_configuration(config_id, request_options=request_options)
        )

    async def list_software_configurations(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SoftwareConfigurationRecordsResponse:
        """Lists FreeRTOS software configuration records.

        Args:
            max_results: Maximum results to return.
            next_token: Pagination token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_software_configurations(
                max_results=max_results, next_token=next_token, request_options=request_options
            ),
        )

    async def update_software_configuration(
        self,
        config_id: str,
        body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SoftwareConfiguration:
        """Updates a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_software_configuration(
                config_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSoftwareConfigurationsWithRawResponse:
        return self._with_raw_response


class SoftwareConfigurationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_software_configuration(
        self,
        body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfiguration, CreateSoftwareConfigurationErrorBody]:
        """Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware
        platform.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/software-configuration-records"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[SoftwareConfiguration],
            error_mapper=create_software_configuration_error_mapper,
            request_options=request_options,
        )

    def delete_software_configuration(
        self, config_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSoftwareConfigurationErrorBody]:
        """Deletes a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=empty_response,
            error_mapper=delete_software_configuration_error_mapper,
            request_options=request_options,
        )

    def describe_software_configuration(
        self, config_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SoftwareConfiguration, DescribeSoftwareConfigurationErrorBody]:
        """Gets a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[SoftwareConfiguration],
            error_mapper=describe_software_configuration_error_mapper,
            request_options=request_options,
        )

    def list_software_configurations(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfigurationRecordsResponse, ListSoftwareConfigurationsErrorBody]:
        """Lists FreeRTOS software configuration records.

        Args:
            max_results: Maximum results to return.
            next_token: Pagination token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/software-configuration-records"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("nextToken", next_token)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[SoftwareConfigurationRecordsResponse],
            error_mapper=list_software_configurations_error_mapper,
            request_options=request_options,
        )

    def update_software_configuration(
        self,
        config_id: str,
        body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfiguration, UpdateSoftwareConfigurationErrorBody]:
        """Updates a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[SoftwareConfiguration],
            error_mapper=update_software_configuration_error_mapper,
            request_options=request_options,
        )


class AsyncSoftwareConfigurationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_software_configuration(
        self,
        body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfiguration, CreateSoftwareConfigurationErrorBody]:
        """Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware
        platform.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/software-configuration-records"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[SoftwareConfiguration],
            error_mapper=create_software_configuration_error_mapper,
            request_options=request_options,
        )

    async def delete_software_configuration(
        self, config_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSoftwareConfigurationErrorBody]:
        """Deletes a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_empty_response,
            error_mapper=delete_software_configuration_error_mapper,
            request_options=request_options,
        )

    async def describe_software_configuration(
        self, config_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SoftwareConfiguration, DescribeSoftwareConfigurationErrorBody]:
        """Gets a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[SoftwareConfiguration],
            error_mapper=describe_software_configuration_error_mapper,
            request_options=request_options,
        )

    async def list_software_configurations(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfigurationRecordsResponse, ListSoftwareConfigurationsErrorBody]:
        """Lists FreeRTOS software configuration records.

        Args:
            max_results: Maximum results to return.
            next_token: Pagination token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/software-configuration-records"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("nextToken", next_token)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[SoftwareConfigurationRecordsResponse],
            error_mapper=list_software_configurations_error_mapper,
            request_options=request_options,
        )

    async def update_software_configuration(
        self,
        config_id: str,
        body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SoftwareConfiguration, UpdateSoftwareConfigurationErrorBody]:
        """Updates a FreeRTOS software configuration record.

        Args:
            config_id: ID of the software configuration to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/software-configuration-records/{configId}"),
            path_params=[param[str]("configId", config_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[SoftwareConfiguration],
            error_mapper=update_software_configuration_error_mapper,
            request_options=request_options,
        )
