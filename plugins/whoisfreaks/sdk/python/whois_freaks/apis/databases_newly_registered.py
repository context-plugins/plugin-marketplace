from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.db_newly_cctld_cleaned_error import DbNewlyCctldCleanedErrorBody, db_newly_cctld_cleaned_error_mapper
from ..errors.db_newly_cctld_error import DbNewlyCctldErrorBody, db_newly_cctld_error_mapper
from ..errors.db_newly_cctld_json_error import DbNewlyCctldJsonErrorBody, db_newly_cctld_json_error_mapper
from ..errors.db_newly_dns_error import DbNewlyDnsErrorBody, db_newly_dns_error_mapper
from ..errors.db_newly_gtld_cleaned_error import DbNewlyGtldCleanedErrorBody, db_newly_gtld_cleaned_error_mapper
from ..errors.db_newly_gtld_error import DbNewlyGtldErrorBody, db_newly_gtld_error_mapper
from ..errors.db_newly_gtld_json_error import DbNewlyGtldJsonErrorBody, db_newly_gtld_json_error_mapper
from ..server.server import Server


class DatabasesNewlyRegistered:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesNewlyRegisteredWithRawResponse(client, server, auth)

    def db_newly_cctld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.db_newly_cctld(whois, date=date, tlds=tlds, request_options=request_options)
        )

    def db_newly_cctld_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_newly_cctld_cleaned(date=date, request_options=request_options))

    def db_newly_cctld_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[str]:
        """Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.db_newly_cctld_json(date=date, tlds=tlds, request_options=request_options)
        )

    def db_newly_dns(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Newly Registered With DNS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains with DNS

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_newly_dns(date=date, request_options=request_options))

    def db_newly_gtld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.db_newly_gtld(whois, date=date, tlds=tlds, request_options=request_options)
        )

    def db_newly_gtld_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_newly_gtld_cleaned(date=date, request_options=request_options))

    def db_newly_gtld_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[str]:
        """Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_newly_gtld_json(date=date, tlds=tlds, request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesNewlyRegisteredWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesNewlyRegistered:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesNewlyRegisteredWithRawResponse(client, server, auth)

    async def db_newly_cctld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_newly_cctld(whois, date=date, tlds=tlds, request_options=request_options)
        )

    async def db_newly_cctld_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_newly_cctld_cleaned(date=date, request_options=request_options))

    async def db_newly_cctld_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[str]:
        """Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_newly_cctld_json(date=date, tlds=tlds, request_options=request_options)
        )

    async def db_newly_dns(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Newly Registered With DNS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains with DNS

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_newly_dns(date=date, request_options=request_options))

    async def db_newly_gtld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_newly_gtld(whois, date=date, tlds=tlds, request_options=request_options)
        )

    async def db_newly_gtld_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_newly_gtld_cleaned(date=date, request_options=request_options))

    async def db_newly_gtld_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[str]:
        """Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_newly_gtld_json(date=date, tlds=tlds, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDatabasesNewlyRegisteredWithRawResponse:
        return self._with_raw_response


class DatabasesNewlyRegisteredWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_newly_cctld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, DbNewlyCctldErrorBody]:
        """Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/cctld"),
            query_params=[
                param[bool]("whois", whois), param[Date | None]("date", date), param[str | None]("tlds", tlds)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_newly_cctld_error_mapper,
            request_options=request_options,
        )

    def db_newly_cctld_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbNewlyCctldCleanedErrorBody]:
        """Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/cctld/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_newly_cctld_cleaned_error_mapper,
            request_options=request_options,
        )

    def db_newly_cctld_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], DbNewlyCctldJsonErrorBody]:
        """Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/newly/cctld"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=db_newly_cctld_json_error_mapper,
            request_options=request_options,
        )

    def db_newly_dns(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbNewlyDnsErrorBody]:
        """Newly Registered With DNS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/newly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_newly_dns_error_mapper,
            request_options=request_options,
        )

    def db_newly_gtld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, DbNewlyGtldErrorBody]:
        """Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/gtld"),
            query_params=[
                param[bool]("whois", whois), param[Date | None]("date", date), param[str | None]("tlds", tlds)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_newly_gtld_error_mapper,
            request_options=request_options,
        )

    def db_newly_gtld_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbNewlyGtldCleanedErrorBody]:
        """Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/gtld/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_newly_gtld_cleaned_error_mapper,
            request_options=request_options,
        )

    def db_newly_gtld_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], DbNewlyGtldJsonErrorBody]:
        """Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/newly/gtld"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=db_newly_gtld_json_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesNewlyRegisteredWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_newly_cctld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, DbNewlyCctldErrorBody]:
        """Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/cctld"),
            query_params=[
                param[bool]("whois", whois), param[Date | None]("date", date), param[str | None]("tlds", tlds)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_newly_cctld_error_mapper,
            request_options=request_options,
        )

    async def db_newly_cctld_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbNewlyCctldCleanedErrorBody]:
        """Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/cctld/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_newly_cctld_cleaned_error_mapper,
            request_options=request_options,
        )

    async def db_newly_cctld_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[str], DbNewlyCctldJsonErrorBody]:
        """Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/newly/cctld"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=db_newly_cctld_json_error_mapper,
            request_options=request_options,
        )

    async def db_newly_dns(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbNewlyDnsErrorBody]:
        """Newly Registered With DNS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/newly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_newly_dns_error_mapper,
            request_options=request_options,
        )

    async def db_newly_gtld(
        self,
        whois: bool,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, DbNewlyGtldErrorBody]:
        """Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/gtld"),
            query_params=[
                param[bool]("whois", whois), param[Date | None]("date", date), param[str | None]("tlds", tlds)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_newly_gtld_error_mapper,
            request_options=request_options,
        )

    async def db_newly_gtld_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbNewlyGtldCleanedErrorBody]:
        """Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/gtld/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_newly_gtld_cleaned_error_mapper,
            request_options=request_options,
        )

    async def db_newly_gtld_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[str], DbNewlyGtldJsonErrorBody]:
        """Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/newly/gtld"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=db_newly_gtld_json_error_mapper,
            request_options=request_options,
        )
