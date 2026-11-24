from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Dataset:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DatasetWithRawResponse(client, server)

    def dataset_advisories_dataset_advisories_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dataset_advisories_dataset_advisories_json_get(request_options=request_options)
        )

    def dataset_consensus_dataset_consensus_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dataset_consensus_dataset_consensus_json_get(request_options=request_options)
        )

    def dataset_index_dataset_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Open, free, crawlable snapshots of every feed (for AI training & research).

        The real-time, filterable API + MCP endpoint remain the product; this is a public snapshot so the data spreads
        into the corpus AIs learn from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dataset_index_dataset_get(request_options=request_options))

    def dataset_models_dataset_models_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dataset_models_dataset_models_json_get(request_options=request_options))

    def dataset_news_dataset_news_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dataset_news_dataset_news_json_get(request_options=request_options))

    def dataset_servers_dataset_servers_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dataset_servers_dataset_servers_json_get(request_options=request_options))

    def dataset_status_dataset_status_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dataset_status_dataset_status_json_get(request_options=request_options))

    def dataset_versions_dataset_versions_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dataset_versions_dataset_versions_json_get(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DatasetWithRawResponse:
        return self._with_raw_response


class AsyncDataset:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDatasetWithRawResponse(client, server)

    async def dataset_advisories_dataset_advisories_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_advisories_dataset_advisories_json_get(
                request_options=request_options
            ),
        )

    async def dataset_consensus_dataset_consensus_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_consensus_dataset_consensus_json_get(request_options=request_options)
        )

    async def dataset_index_dataset_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Open, free, crawlable snapshots of every feed (for AI training & research).

        The real-time, filterable API + MCP endpoint remain the product; this is a public snapshot so the data spreads
        into the corpus AIs learn from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dataset_index_dataset_get(request_options=request_options))

    async def dataset_models_dataset_models_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_models_dataset_models_json_get(request_options=request_options)
        )

    async def dataset_news_dataset_news_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dataset_news_dataset_news_json_get(request_options=request_options))

    async def dataset_servers_dataset_servers_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_servers_dataset_servers_json_get(request_options=request_options)
        )

    async def dataset_status_dataset_status_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_status_dataset_status_json_get(request_options=request_options)
        )

    async def dataset_versions_dataset_versions_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dataset_versions_dataset_versions_json_get(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDatasetWithRawResponse:
        return self._with_raw_response


class DatasetWithRawResponse(BaseRawResponse[RawClient, Server]):
    def dataset_advisories_dataset_advisories_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/advisories.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_consensus_dataset_consensus_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/consensus.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_index_dataset_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Open, free, crawlable snapshots of every feed (for AI training & research).

        The real-time, filterable API + MCP endpoint remain the product; this is a public snapshot so the data spreads
        into the corpus AIs learn from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_models_dataset_models_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/models.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_news_dataset_news_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/news.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_servers_dataset_servers_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/servers.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_status_dataset_status_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/status.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def dataset_versions_dataset_versions_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/versions.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDatasetWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def dataset_advisories_dataset_advisories_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/advisories.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_consensus_dataset_consensus_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/consensus.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_index_dataset_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Open, free, crawlable snapshots of every feed (for AI training & research).

        The real-time, filterable API + MCP endpoint remain the product; this is a public snapshot so the data spreads
        into the corpus AIs learn from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_models_dataset_models_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/models.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_news_dataset_news_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/news.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_servers_dataset_servers_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/servers.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_status_dataset_status_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/status.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def dataset_versions_dataset_versions_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/dataset/versions.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
