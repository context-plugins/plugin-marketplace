from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    Date,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.account_summary_error import AccountSummaryErrorBody, account_summary_error_mapper
from ..errors.index2_error import Index2ErrorBody, index2_error_mapper
from ..errors.summary_error import SummaryErrorBody, summary_error_mapper
from ..models.ad_network_report_summary import AdNetworkReportSummary
from ..models.ad_network_reports_get_response import AdNetworkReportsGetResponse
from ..server.server import Server


class AdNetworkReports:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AdNetworkReportsWithRawResponse(client, server)

    def account_summary(
        self,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdNetworkReportSummary:
        """This feature is currently in beta and the API is subject to change.

        Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

        Args:
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.account_summary(
                authorization, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    def index2(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdNetworkReportsGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve advertisement performance and payment reports for the publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            limit: A limit between 1 and 100. Defaults to 10.
            page: The page of reports to return. Defaults to 1.
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.index2(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    def summary(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdNetworkReportSummary:
        """This feature is currently in beta and the API is subject to change.

        Retrieve aggregate advertisement performance and revenue for a publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.summary(
                publication_id, authorization, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AdNetworkReportsWithRawResponse:
        return self._with_raw_response


class AsyncAdNetworkReports:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAdNetworkReportsWithRawResponse(client, server)

    async def account_summary(
        self,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdNetworkReportSummary:
        """This feature is currently in beta and the API is subject to change.

        Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

        Args:
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.account_summary(
                authorization, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    async def index2(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdNetworkReportsGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve advertisement performance and payment reports for the publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            limit: A limit between 1 and 100. Defaults to 10.
            page: The page of reports to return. Defaults to 1.
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.index2(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    async def summary(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdNetworkReportSummary:
        """This feature is currently in beta and the API is subject to change.

        Retrieve aggregate advertisement performance and revenue for a publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.summary(
                publication_id, authorization, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdNetworkReportsWithRawResponse:
        return self._with_raw_response


class AdNetworkReportsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def account_summary(
        self,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportSummary, AccountSummaryErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

        Args:
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ad_network/reports/summaries"),
            query_params=[param[Date | None]("start_date", start_date), param[Date | None]("end_date", end_date)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdNetworkReportSummary],
            error_mapper=account_summary_error_mapper,
            request_options=request_options,
        )

    def index2(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportsGetResponse, Index2ErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve advertisement performance and payment reports for the publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            limit: A limit between 1 and 100. Defaults to 10.
            page: The page of reports to return. Defaults to 1.
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/reports"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[Date | None]("start_date", start_date),
                param[Date | None]("end_date", end_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdNetworkReportsGetResponse],
            error_mapper=index2_error_mapper,
            request_options=request_options,
        )

    def summary(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportSummary, SummaryErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve aggregate advertisement performance and revenue for a publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/reports/summaries"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[Date | None]("start_date", start_date), param[Date | None]("end_date", end_date)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdNetworkReportSummary],
            error_mapper=summary_error_mapper,
            request_options=request_options,
        )


class AsyncAdNetworkReportsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def account_summary(
        self,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportSummary, AccountSummaryErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

        Args:
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ad_network/reports/summaries"),
            query_params=[param[Date | None]("start_date", start_date), param[Date | None]("end_date", end_date)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdNetworkReportSummary],
            error_mapper=account_summary_error_mapper,
            request_options=request_options,
        )

    async def index2(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportsGetResponse, Index2ErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve advertisement performance and payment reports for the publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            limit: A limit between 1 and 100. Defaults to 10.
            page: The page of reports to return. Defaults to 1.
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/reports"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[Date | None]("start_date", start_date),
                param[Date | None]("end_date", end_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdNetworkReportsGetResponse],
            error_mapper=index2_error_mapper,
            request_options=request_options,
        )

    async def summary(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdNetworkReportSummary, SummaryErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve aggregate advertisement performance and revenue for a publication.

        Args:
            publication_id: The prefixed ID of the publication object.
            authorization: Bearer authentication
            start_date: Include reports for advertisements sent on or after this date in ``YYYY-MM-DD`` format.
            end_date: Include reports for advertisements sent on or before this date in ``YYYY-MM-DD`` format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/reports/summaries"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[Date | None]("start_date", start_date), param[Date | None]("end_date", end_date)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdNetworkReportSummary],
            error_mapper=summary_error_mapper,
            request_options=request_options,
        )
