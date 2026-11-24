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
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_business_file_error import GetBusinessFileErrorBody, get_business_file_error_mapper
from ..errors.get_receipt_error import GetReceiptErrorBody, get_receipt_error_mapper
from ..errors.verify_business_error import VerifyBusinessErrorBody, verify_business_error_mapper
from ..models.enums.activity import ActivityOrStr
from ..models.receipt import Receipt
from ..models.verify_response import VerifyResponse
from ..server.server import Server


class Verify:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VerifyWithRawResponse(client, server)

    def get_business_file(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            File

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_business_file(id_, request_options=request_options))

    def get_receipt(self, receipt_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Receipt:
        """Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or
        counterparty. Verify ``signature.sig`` over the canonical statement with the key at /.well-known/jid-keys.json.

        Args:
            receipt_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Receipt

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_receipt(receipt_id, request_options=request_options))

    def list_activities(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rules

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_activities(request_options=request_options))

    def verify_business(
        self,
        id_: str,
        *,
        activity: ActivityOrStr | None = None,
        jurisdiction: str | None = None,
        amount: float | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VerifyResponse:
        """One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts
        (unchanged since 1.0). With any of them: also ``decision`` (proceed | review | stop | insufficient_data) with
        reasons, and ``receipt`` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check
        are unknown and lead to review.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            activity: What the business is about to do for you. Default general_commerce when jurisdiction or amount is
                given. Rules: https://jid.com/decision-rules
            jurisdiction: US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.
            amount: Transaction amount. Context only: recorded on the receipt, never changes the rules.
            currency: ISO 4217 code for amount. Default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The file, and the decision when requested

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.verify_business(
                id_,
                activity=activity,
                jurisdiction=jurisdiction,
                amount=amount,
                currency=currency,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> VerifyWithRawResponse:
        return self._with_raw_response


class AsyncVerify:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVerifyWithRawResponse(client, server)

    async def get_business_file(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            File

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_business_file(id_, request_options=request_options))

    async def get_receipt(
        self, receipt_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Receipt:
        """Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or
        counterparty. Verify ``signature.sig`` over the canonical statement with the key at /.well-known/jid-keys.json.

        Args:
            receipt_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Receipt

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_receipt(receipt_id, request_options=request_options))

    async def list_activities(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rules

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_activities(request_options=request_options))

    async def verify_business(
        self,
        id_: str,
        *,
        activity: ActivityOrStr | None = None,
        jurisdiction: str | None = None,
        amount: float | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VerifyResponse:
        """One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts
        (unchanged since 1.0). With any of them: also ``decision`` (proceed | review | stop | insufficient_data) with
        reasons, and ``receipt`` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check
        are unknown and lead to review.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            activity: What the business is about to do for you. Default general_commerce when jurisdiction or amount is
                given. Rules: https://jid.com/decision-rules
            jurisdiction: US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.
            amount: Transaction amount. Context only: recorded on the receipt, never changes the rules.
            currency: ISO 4217 code for amount. Default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The file, and the decision when requested

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.verify_business(
                id_,
                activity=activity,
                jurisdiction=jurisdiction,
                amount=amount,
                currency=currency,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVerifyWithRawResponse:
        return self._with_raw_response


class VerifyWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_business_file(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetBusinessFileErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/entities/{id}"),
            path_params=[param[str]("id", id_)],
            decoder=json_decoder[Any],
            error_mapper=get_business_file_error_mapper,
            request_options=request_options,
        )

    def get_receipt(
        self, receipt_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Receipt, GetReceiptErrorBody]:
        """Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or
        counterparty. Verify ``signature.sig`` over the canonical statement with the key at /.well-known/jid-keys.json.

        Args:
            receipt_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/receipts/{receipt_id}"),
            path_params=[param[str]("receipt_id", receipt_id)],
            decoder=json_decoder[Receipt],
            error_mapper=get_receipt_error_mapper,
            request_options=request_options,
        )

    def list_activities(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/activities"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def verify_business(
        self,
        id_: str,
        *,
        activity: ActivityOrStr | None = None,
        jurisdiction: str | None = None,
        amount: float | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VerifyResponse, VerifyBusinessErrorBody]:
        """One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts
        (unchanged since 1.0). With any of them: also ``decision`` (proceed | review | stop | insufficient_data) with
        reasons, and ``receipt`` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check
        are unknown and lead to review.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            activity: What the business is about to do for you. Default general_commerce when jurisdiction or amount is
                given. Rules: https://jid.com/decision-rules
            jurisdiction: US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.
            amount: Transaction amount. Context only: recorded on the receipt, never changes the rules.
            currency: ISO 4217 code for amount. Default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/entities/{id}/verify"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[ActivityOrStr | None]("activity", activity),
                param[str | None]("jurisdiction", jurisdiction),
                param[float | None]("amount", amount),
                param[str | None]("currency", currency),
            ],
            decoder=json_decoder[VerifyResponse],
            error_mapper=verify_business_error_mapper,
            request_options=request_options,
        )


class AsyncVerifyWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_business_file(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetBusinessFileErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/entities/{id}"),
            path_params=[param[str]("id", id_)],
            decoder=async_json_decoder[Any],
            error_mapper=get_business_file_error_mapper,
            request_options=request_options,
        )

    async def get_receipt(
        self, receipt_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Receipt, GetReceiptErrorBody]:
        """Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or
        counterparty. Verify ``signature.sig`` over the canonical statement with the key at /.well-known/jid-keys.json.

        Args:
            receipt_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/receipts/{receipt_id}"),
            path_params=[param[str]("receipt_id", receipt_id)],
            decoder=async_json_decoder[Receipt],
            error_mapper=get_receipt_error_mapper,
            request_options=request_options,
        )

    async def list_activities(
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
            url_template=self._server.default("/v1/activities"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def verify_business(
        self,
        id_: str,
        *,
        activity: ActivityOrStr | None = None,
        jurisdiction: str | None = None,
        amount: float | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VerifyResponse, VerifyBusinessErrorBody]:
        """One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts
        (unchanged since 1.0). With any of them: also ``decision`` (proceed | review | stop | insufficient_data) with
        reasons, and ``receipt`` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check
        are unknown and lead to review.

        Args:
            id_: Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi).
            activity: What the business is about to do for you. Default general_commerce when jurisdiction or amount is
                given. Rules: https://jid.com/decision-rules
            jurisdiction: US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.
            amount: Transaction amount. Context only: recorded on the receipt, never changes the rules.
            currency: ISO 4217 code for amount. Default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/entities/{id}/verify"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[ActivityOrStr | None]("activity", activity),
                param[str | None]("jurisdiction", jurisdiction),
                param[float | None]("amount", amount),
                param[str | None]("currency", currency),
            ],
            decoder=async_json_decoder[VerifyResponse],
            error_mapper=verify_business_error_mapper,
            request_options=request_options,
        )
