from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.instagram_connection_method_bundle_social_social_account_api import (
    InstagramConnectionMethodBundleSocialSocialAccountApiOrStr,
)
from .enums.type import TypeOrStr


class ApiV1SocialAccountConnectRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")
    redirect_url: str = Field(alias="redirectUrl")
    """Client-provided return URL. After the OAuth flow completes (success or error), the user will be redirected here
    with success/error query params appended. Must be a well-formed http/https URL."""

    server_url: Optional[str] = Field(default=UNSET, alias="serverUrl")
    """Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g. https://mastodon.social). Optional for
    Bluesky - omit it to use the default issuer https://bsky.social, or pass a custom PDS/entryway issuer."""

    disable_auto_login: bool = Field(default=False, alias="disableAutoLogin")
    """Optional. When true, adds provider-specific flags to avoid automatic login/auto-approval where supported."""

    tiktok_force_login: bool = Field(default=False, alias="tiktokForceLogin")
    """Optional and experimental. TikTok only. When true, routes authorization through TikTok logout to request a fresh
    login session."""

    force_browser_o_auth: bool = Field(default=False, alias="forceBrowserOAuth")
    """Optional. Instagram direct OAuth only. When true, Instagram asks for a fresh login instead of reusing the account
    logged in on that browser. In the hosted portal it applies only on iPhone/iPad. Staying in the browser on iOS is the
    default for every connection and needs no flag."""

    instagram_connection_method: Optional[InstagramConnectionMethodBundleSocialSocialAccountApiOrStr] = Field(
        default=UNSET, alias="instagramConnectionMethod"
    )
    """Instagram only - connection method"""

    with_business_scope: bool = Field(default=False, alias="withBusinessScope")
    """Facebook and Instagram: include business_management, ads_management, ads_read scopes. YouTube: include the
    monetary analytics scope (enables revenue/monetization data)."""

    with_messaging_scope: bool = Field(default=False, alias="withMessagingScope")
    """Facebook and Instagram: include the Meta messaging (DM) scopes. Ignored unless messaging is enabled for your
    organization."""

    reconnect: bool = False
    """Re-authorize the account already connected to this team in place: tokens and permissions are refreshed while the
    account, its posts and scheduled destinations stay. The user must log in with the same account. Currently supported
    for Instagram connected with instagramConnectionMethod INSTAGRAM."""


class ApiV1SocialAccountConnectRequestDict(TypedDict):
    type_: TypeOrStr
    team_id: str
    redirect_url: str
    server_url: NotRequired[str]
    disable_auto_login: NotRequired[bool]
    tiktok_force_login: NotRequired[bool]
    force_browser_o_auth: NotRequired[bool]
    instagram_connection_method: NotRequired[InstagramConnectionMethodBundleSocialSocialAccountApiOrStr]
    with_business_scope: NotRequired[bool]
    with_messaging_scope: NotRequired[bool]
    reconnect: NotRequired[bool]
