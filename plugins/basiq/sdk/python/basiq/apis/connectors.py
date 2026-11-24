from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_connector_error import GetConnectorErrorBody, get_connector_error_mapper
from ..errors.get_connectors_error import GetConnectorsErrorBody, get_connectors_error_mapper
from ..models.connectors_response import ConnectorsResponse
from ..models.connectors_response1 import ConnectorsResponse1
from ..server.server import Server


class Connectors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConnectorsWithRawResponse(client, server, auth)

    def get_connector(
        self, connector_id: str, method: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectorsResponse1:
        """NOTE: This end point requires authentication.

        Args:
            connector_id: Connector ID
            method: Connector method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns data of single connector.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Returns error that indicates unauthorized access. Returns error
                indicating that server cannot find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Connectors400Error1 | Connectors401Error1 | Connectors404Error1 | Connectors500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_connector(connector_id, method, request_options=request_options))

    def get_connectors(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectorsResponse:
        r"""NOTE: This end point requires authentication.

        Args:
            filter_: Filter parameter can be used to filter connector list by connector property. This parameter should
                contain a comma-separated list of filter statements.</br> A filter statement is composed of the entity
                name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator
                (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br> The following list of
                regular expressions describes acceptable filter statements:</br> •
                (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br> •
                (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)</br> •
                (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)</br>
                • (connector).(status).(in)\(([\w\W]+)\)</br> •
                (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)</br> • (connector).(stage).(in)\(([\w\W]+)\)</br>
                • (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)</br> •
                (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)</br> •
                (connector).(institution).(country).(in)\(([\w\W]+)\)</br> •
                (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)</br> •
                (connector).(institution).(tier).(in)\(([\W\d]+)\)</br> •
                (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit Union'|'Financial
                Services'|'Superannuation')\)</br> •
                (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)</br>
                • (connector).(authorization).(type).(in)\(([\w\W]+)\)</br> •
                (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)</br> Multiple filter definitions should be
                separated with a comma (,).</br> For example, this filter statement will keep only live tier 1 and tier
                2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br>
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns data of single connector.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Returns error that indicates unauthorized access. Returns error
                indicating that server cannot find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Connectors400Error1 | Connectors401Error1 | Connectors404Error1 | Connectors500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_connectors(filter_=filter_, request_options=request_options))

    @property
    def with_raw_response(self) -> ConnectorsWithRawResponse:
        return self._with_raw_response


class AsyncConnectors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConnectorsWithRawResponse(client, server, auth)

    async def get_connector(
        self, connector_id: str, method: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectorsResponse1:
        """NOTE: This end point requires authentication.

        Args:
            connector_id: Connector ID
            method: Connector method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns data of single connector.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Returns error that indicates unauthorized access. Returns error
                indicating that server cannot find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Connectors400Error1 | Connectors401Error1 | Connectors404Error1 | Connectors500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_connector(connector_id, method, request_options=request_options)
        )

    async def get_connectors(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectorsResponse:
        r"""NOTE: This end point requires authentication.

        Args:
            filter_: Filter parameter can be used to filter connector list by connector property. This parameter should
                contain a comma-separated list of filter statements.</br> A filter statement is composed of the entity
                name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator
                (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br> The following list of
                regular expressions describes acceptable filter statements:</br> •
                (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br> •
                (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)</br> •
                (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)</br>
                • (connector).(status).(in)\(([\w\W]+)\)</br> •
                (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)</br> • (connector).(stage).(in)\(([\w\W]+)\)</br>
                • (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)</br> •
                (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)</br> •
                (connector).(institution).(country).(in)\(([\w\W]+)\)</br> •
                (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)</br> •
                (connector).(institution).(tier).(in)\(([\W\d]+)\)</br> •
                (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit Union'|'Financial
                Services'|'Superannuation')\)</br> •
                (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)</br>
                • (connector).(authorization).(type).(in)\(([\w\W]+)\)</br> •
                (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)</br> Multiple filter definitions should be
                separated with a comma (,).</br> For example, this filter statement will keep only live tier 1 and tier
                2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br>
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns data of single connector.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Returns error that indicates unauthorized access. Returns error
                indicating that server cannot find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Connectors400Error1 | Connectors401Error1 | Connectors404Error1 | Connectors500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_connectors(filter_=filter_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncConnectorsWithRawResponse:
        return self._with_raw_response


class ConnectorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_connector(
        self, connector_id: str, method: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectorsResponse1, GetConnectorErrorBody]:
        """NOTE: This end point requires authentication.

        Args:
            connector_id: Connector ID
            method: Connector method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/connectors/{connectorId}/{method}"),
            path_params=[param[str]("connectorId", connector_id), param[str]("method", method)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectorsResponse1],
            error_mapper=get_connector_error_mapper,
            request_options=request_options,
        )

    def get_connectors(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectorsResponse, GetConnectorsErrorBody]:
        r"""NOTE: This end point requires authentication.

        Args:
            filter_: Filter parameter can be used to filter connector list by connector property. This parameter should
                contain a comma-separated list of filter statements.</br> A filter statement is composed of the entity
                name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator
                (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br> The following list of
                regular expressions describes acceptable filter statements:</br> •
                (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br> •
                (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)</br> •
                (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)</br>
                • (connector).(status).(in)\(([\w\W]+)\)</br> •
                (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)</br> • (connector).(stage).(in)\(([\w\W]+)\)</br>
                • (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)</br> •
                (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)</br> •
                (connector).(institution).(country).(in)\(([\w\W]+)\)</br> •
                (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)</br> •
                (connector).(institution).(tier).(in)\(([\W\d]+)\)</br> •
                (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit Union'|'Financial
                Services'|'Superannuation')\)</br> •
                (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)</br>
                • (connector).(authorization).(type).(in)\(([\w\W]+)\)</br> •
                (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)</br> Multiple filter definitions should be
                separated with a comma (,).</br> For example, this filter statement will keep only live tier 1 and tier
                2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br>
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/connectors"),
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectorsResponse],
            error_mapper=get_connectors_error_mapper,
            request_options=request_options,
        )


class AsyncConnectorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_connector(
        self, connector_id: str, method: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectorsResponse1, GetConnectorErrorBody]:
        """NOTE: This end point requires authentication.

        Args:
            connector_id: Connector ID
            method: Connector method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/connectors/{connectorId}/{method}"),
            path_params=[param[str]("connectorId", connector_id), param[str]("method", method)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectorsResponse1],
            error_mapper=get_connector_error_mapper,
            request_options=request_options,
        )

    async def get_connectors(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectorsResponse, GetConnectorsErrorBody]:
        r"""NOTE: This end point requires authentication.

        Args:
            filter_: Filter parameter can be used to filter connector list by connector property. This parameter should
                contain a comma-separated list of filter statements.</br> A filter statement is composed of the entity
                name (in this case, it is always 'connector'), the property name (e.g., 'stage'), the filter operator
                (e.g., 'eq'), and the quoted string value in parentheses (e.g., "('live')").</br> The following list of
                regular expressions describes acceptable filter statements:</br> •
                (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br> •
                (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)</br> •
                (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)</br>
                • (connector).(status).(in)\(([\w\W]+)\)</br> •
                (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)</br> • (connector).(stage).(in)\(([\w\W]+)\)</br>
                • (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)</br> •
                (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)</br> •
                (connector).(institution).(country).(in)\(([\w\W]+)\)</br> •
                (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)</br> •
                (connector).(institution).(tier).(in)\(([\W\d]+)\)</br> •
                (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit Union'|'Financial
                Services'|'Superannuation')\)</br> •
                (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)</br>
                • (connector).(authorization).(type).(in)\(([\w\W]+)\)</br> •
                (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)</br> Multiple filter definitions should be
                separated with a comma (,).</br> For example, this filter statement will keep only live tier 1 and tier
                2 institutions: filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br>
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/connectors"),
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectorsResponse],
            error_mapper=get_connectors_error_mapper,
            request_options=request_options,
        )
