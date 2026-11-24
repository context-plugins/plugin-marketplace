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
from ..errors.get_manifest_error import GetManifestErrorBody, get_manifest_error_mapper
from ..models.manifest import Manifest
from ..server.server import Server


class ManifestApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ManifestApiWithRawResponse(client, server)

    def get_manifest(
        self,
        x_project_uid: str,
        *,
        x_cs_personalize_user_uid: str | None = None,
        x_forwarded_for: str | None = None,
        user_agent: str | None = None,
        referer: str | None = None,
        x_page_url: str | None = None,
        x_live_attributes: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Manifest:
        """Returns a list of all active personalization experiences and their corresponding content variant mappings for
        the current user. The manifest is evaluated in real-time based on the user's attributes and current audience
        memberships. This endpoint is called at the beginning of a user session to determine which content variants to
        display.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            x_forwarded_for: Original client IP address for geolocation-based targeting.
            user_agent: User agent string for device-based targeting rules.
            referer: Referring URL for referral-based audience rules.
            x_page_url: Current page URL for page-based audience targeting rules.
            x_live_attributes: JSON-encoded object of real-time attribute values to evaluate audience rules against
                without persisting them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The personalization manifest with active experiences and variants.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_manifest(
                x_project_uid,
                x_cs_personalize_user_uid=x_cs_personalize_user_uid,
                x_forwarded_for=x_forwarded_for,
                user_agent=user_agent,
                referer=referer,
                x_page_url=x_page_url,
                x_live_attributes=x_live_attributes,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ManifestApiWithRawResponse:
        return self._with_raw_response


class AsyncManifestApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncManifestApiWithRawResponse(client, server)

    async def get_manifest(
        self,
        x_project_uid: str,
        *,
        x_cs_personalize_user_uid: str | None = None,
        x_forwarded_for: str | None = None,
        user_agent: str | None = None,
        referer: str | None = None,
        x_page_url: str | None = None,
        x_live_attributes: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Manifest:
        """Returns a list of all active personalization experiences and their corresponding content variant mappings for
        the current user. The manifest is evaluated in real-time based on the user's attributes and current audience
        memberships. This endpoint is called at the beginning of a user session to determine which content variants to
        display.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            x_forwarded_for: Original client IP address for geolocation-based targeting.
            user_agent: User agent string for device-based targeting rules.
            referer: Referring URL for referral-based audience rules.
            x_page_url: Current page URL for page-based audience targeting rules.
            x_live_attributes: JSON-encoded object of real-time attribute values to evaluate audience rules against
                without persisting them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The personalization manifest with active experiences and variants.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_manifest(
                x_project_uid,
                x_cs_personalize_user_uid=x_cs_personalize_user_uid,
                x_forwarded_for=x_forwarded_for,
                user_agent=user_agent,
                referer=referer,
                x_page_url=x_page_url,
                x_live_attributes=x_live_attributes,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncManifestApiWithRawResponse:
        return self._with_raw_response


class ManifestApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_manifest(
        self,
        x_project_uid: str,
        *,
        x_cs_personalize_user_uid: str | None = None,
        x_forwarded_for: str | None = None,
        user_agent: str | None = None,
        referer: str | None = None,
        x_page_url: str | None = None,
        x_live_attributes: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Manifest, GetManifestErrorBody]:
        """Returns a list of all active personalization experiences and their corresponding content variant mappings for
        the current user. The manifest is evaluated in real-time based on the user's attributes and current audience
        memberships. This endpoint is called at the beginning of a user session to determine which content variants to
        display.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            x_forwarded_for: Original client IP address for geolocation-based targeting.
            user_agent: User agent string for device-based targeting rules.
            referer: Referring URL for referral-based audience rules.
            x_page_url: Current page URL for page-based audience targeting rules.
            x_live_attributes: JSON-encoded object of real-time attribute values to evaluate audience rules against
                without persisting them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_events_api("/manifest"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str | None]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[str | None]("x-forwarded-for", x_forwarded_for),
                param[str | None]("user-agent", user_agent),
                param[str | None]("referer", referer),
                param[str | None]("x-page-url", x_page_url),
                param[str | None]("x-live-attributes", x_live_attributes),
            ],
            decoder=json_decoder[Manifest],
            error_mapper=get_manifest_error_mapper,
            request_options=request_options,
        )


class AsyncManifestApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_manifest(
        self,
        x_project_uid: str,
        *,
        x_cs_personalize_user_uid: str | None = None,
        x_forwarded_for: str | None = None,
        user_agent: str | None = None,
        referer: str | None = None,
        x_page_url: str | None = None,
        x_live_attributes: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Manifest, GetManifestErrorBody]:
        """Returns a list of all active personalization experiences and their corresponding content variant mappings for
        the current user. The manifest is evaluated in real-time based on the user's attributes and current audience
        memberships. This endpoint is called at the beginning of a user session to determine which content variants to
        display.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            x_forwarded_for: Original client IP address for geolocation-based targeting.
            user_agent: User agent string for device-based targeting rules.
            referer: Referring URL for referral-based audience rules.
            x_page_url: Current page URL for page-based audience targeting rules.
            x_live_attributes: JSON-encoded object of real-time attribute values to evaluate audience rules against
                without persisting them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_events_api("/manifest"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str | None]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[str | None]("x-forwarded-for", x_forwarded_for),
                param[str | None]("user-agent", user_agent),
                param[str | None]("referer", referer),
                param[str | None]("x-page-url", x_page_url),
                param[str | None]("x-live-attributes", x_live_attributes),
            ],
            decoder=async_json_decoder[Manifest],
            error_mapper=get_manifest_error_mapper,
            request_options=request_options,
        )
