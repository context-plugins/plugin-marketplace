from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_meta_error import GetMetaErrorBody, get_meta_error_mapper
from ..models.meta_response import MetaResponse
from ..server.server import Server


class Meta:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MetaWithRawResponse(client, server)

    def get_meta(
        self, *, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> MetaResponse:
        """What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to
        Candid's ``last_updated`` filter: there is no per-row change stamp because the dataset is rebuilt as a whole
        from monthly IRS releases, so a client keeping its own copy in sync watches ``dataset.version`` and the fiscal
        year span here and re-pulls when either moves. Keyless and unmetered.

        **``scope`` carries TWO fiscal-year ends and they are not the same number.** ``last_fiscal_year`` is the newest
        year any row falls in — sync against this. ``last_complete_fiscal_year`` is the newest year that has finished
        arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so
        the corpus always holds a few hundred early filings for a year that has barely begun. ``partial_fiscal_years``
        names every year still filling. Reporting ``last_fiscal_year`` as the coverage span overstates it by a year or
        two.

        Args:
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            What this deployment holds, and how to get a key.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_meta(jurisdiction=jurisdiction, request_options=request_options))

    @property
    def with_raw_response(self) -> MetaWithRawResponse:
        return self._with_raw_response


class AsyncMeta:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMetaWithRawResponse(client, server)

    async def get_meta(
        self, *, jurisdiction: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MetaResponse:
        """What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to
        Candid's ``last_updated`` filter: there is no per-row change stamp because the dataset is rebuilt as a whole
        from monthly IRS releases, so a client keeping its own copy in sync watches ``dataset.version`` and the fiscal
        year span here and re-pulls when either moves. Keyless and unmetered.

        **``scope`` carries TWO fiscal-year ends and they are not the same number.** ``last_fiscal_year`` is the newest
        year any row falls in — sync against this. ``last_complete_fiscal_year`` is the newest year that has finished
        arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so
        the corpus always holds a few hundred early filings for a year that has barely begun. ``partial_fiscal_years``
        names every year still filling. Reporting ``last_fiscal_year`` as the coverage span overstates it by a year or
        two.

        Args:
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            What this deployment holds, and how to get a key.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_meta(jurisdiction=jurisdiction, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMetaWithRawResponse:
        return self._with_raw_response


class MetaWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_meta(
        self, *, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MetaResponse, GetMetaErrorBody]:
        """What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to
        Candid's ``last_updated`` filter: there is no per-row change stamp because the dataset is rebuilt as a whole
        from monthly IRS releases, so a client keeping its own copy in sync watches ``dataset.version`` and the fiscal
        year span here and re-pulls when either moves. Keyless and unmetered.

        **``scope`` carries TWO fiscal-year ends and they are not the same number.** ``last_fiscal_year`` is the newest
        year any row falls in — sync against this. ``last_complete_fiscal_year`` is the newest year that has finished
        arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so
        the corpus always holds a few hundred early filings for a year that has barely begun. ``partial_fiscal_years``
        names every year still filling. Reporting ``last_fiscal_year`` as the coverage span overstates it by a year or
        two.

        Args:
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            query_params=[param[str | None]("jurisdiction", jurisdiction)],
            decoder=json_decoder[MetaResponse],
            error_mapper=get_meta_error_mapper,
            request_options=request_options,
        )


class AsyncMetaWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_meta(
        self, *, jurisdiction: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MetaResponse, GetMetaErrorBody]:
        """What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to
        Candid's ``last_updated`` filter: there is no per-row change stamp because the dataset is rebuilt as a whole
        from monthly IRS releases, so a client keeping its own copy in sync watches ``dataset.version`` and the fiscal
        year span here and re-pulls when either moves. Keyless and unmetered.

        **``scope`` carries TWO fiscal-year ends and they are not the same number.** ``last_fiscal_year`` is the newest
        year any row falls in — sync against this. ``last_complete_fiscal_year`` is the newest year that has finished
        arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so
        the corpus always holds a few hundred early filings for a year that has barely begun. ``partial_fiscal_years``
        names every year still filling. Reporting ``last_fiscal_year`` as the coverage span overstates it by a year or
        two.

        Args:
            jurisdiction: Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
                currency the filing was made in and are never converted, so every total is a single-jurisdiction total.
                ``x_plinth.dataset`` names the source, licence and currency behind the answer. Distinct from
                ``country``, which is where the RECIPIENT sits.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/meta"),
            query_params=[param[str | None]("jurisdiction", jurisdiction)],
            decoder=async_json_decoder[MetaResponse],
            error_mapper=get_meta_error_mapper,
            request_options=request_options,
        )
