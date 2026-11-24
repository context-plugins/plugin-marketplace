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
from ..errors.show14_error import Show14ErrorBody, show14_error_mapper
from ..models.referral_program_get_response import ReferralProgramGetResponse
from ..server.server import Server


class ReferralProgram:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ReferralProgramWithRawResponse(client, server)

    def show14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReferralProgramGetResponse:
        """Retrieve details about the publication's referral program, including milestones and rewards.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show14(
                publication_id, authorization, limit=limit, page=page, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReferralProgramWithRawResponse:
        return self._with_raw_response


class AsyncReferralProgram:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncReferralProgramWithRawResponse(client, server)

    async def show14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReferralProgramGetResponse:
        """Retrieve details about the publication's referral program, including milestones and rewards.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show14(
                publication_id, authorization, limit=limit, page=page, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReferralProgramWithRawResponse:
        return self._with_raw_response


class ReferralProgramWithRawResponse(BaseRawResponse[RawClient, Server]):
    def show14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReferralProgramGetResponse, Show14ErrorBody]:
        """Retrieve details about the publication's referral program, including milestones and rewards.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/referral_program"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("page", page)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ReferralProgramGetResponse],
            error_mapper=show14_error_mapper,
            request_options=request_options,
        )


class AsyncReferralProgramWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def show14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReferralProgramGetResponse, Show14ErrorBody]:
        """Retrieve details about the publication's referral program, including milestones and rewards.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/referral_program"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("page", page)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ReferralProgramGetResponse],
            error_mapper=show14_error_mapper,
            request_options=request_options,
        )
