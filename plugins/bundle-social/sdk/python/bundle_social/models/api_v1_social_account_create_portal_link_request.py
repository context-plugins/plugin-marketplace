from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.instagram_connection_method_bundle_social_social_account_api import (
    InstagramConnectionMethodBundleSocialSocialAccountApiOrStr,
)
from .enums.language import Language, LanguageOrStr
from .enums.social_account_type_bundle_social_organization_api import SocialAccountTypeBundleSocialOrganizationApiOrStr


class ApiV1SocialAccountCreatePortalLinkRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    redirect_url: Optional[str] = Field(default=UNSET, alias="redirectUrl")
    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr] = Field(alias="socialAccountTypes")
    server_url: Optional[str] = Field(default=UNSET, alias="serverUrl")
    """Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g. https://mastodon.social). Optional for
    Bluesky - omit it to use the default issuer https://bsky.social, or pass a custom PDS/entryway issuer."""

    disable_auto_login: bool = Field(default=False, alias="disableAutoLogin")
    """Optional. If true, portal will request provider-specific anti-auto-login behavior where supported."""

    tiktok_force_login: bool = Field(default=False, alias="tiktokForceLogin")
    """Optional and experimental. TikTok only. When true, portal routes TikTok authorization through logout to request a
    fresh login session."""

    force_browser_o_auth: bool = Field(default=False, alias="forceBrowserOAuth")
    """Optional. Instagram direct OAuth only. When true, Instagram asks for a fresh login instead of reusing the account
    logged in on that browser. In the hosted portal it applies only on iPhone/iPad. Staying in the browser on iOS is the
    default for every connection and needs no flag."""

    instagram_connection_method: Optional[InstagramConnectionMethodBundleSocialSocialAccountApiOrStr] = Field(
        default=UNSET, alias="instagramConnectionMethod"
    )
    """Instagram only - connection method"""

    with_business_scope: Optional[bool] = Field(default=UNSET, alias="withBusinessScope")
    """Optional. Facebook and Instagram only - when provided, portal skips business scope selection modal for Facebook
    login paths."""

    with_messaging_scope: Optional[bool] = Field(default=UNSET, alias="withMessagingScope")
    """Optional. Facebook and Instagram only - request the Meta messaging (DM) scopes. Ignored unless Instagram and
    Facebook direct messages are enabled for your organization (available on request)."""

    expires_in: Optional[int] = Field(default=UNSET, alias="expiresIn")
    """Time in minutes, after which the link will expire. Minimum 5 minutes, maximum 48 hours."""

    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    user_logo_url: Optional[str] = Field(default=UNSET, alias="userLogoUrl")
    user_name: Optional[str] = Field(default=UNSET, alias="userName")
    go_back_button_text: Optional[str] = Field(default=UNSET, alias="goBackButtonText")
    hide_powered_by: Optional[bool] = Field(default=UNSET, alias="hidePoweredBy")
    hide_go_back_button: Optional[bool] = Field(default=UNSET, alias="hideGoBackButton")
    hide_user_logo: Optional[bool] = Field(default=UNSET, alias="hideUserLogo")
    hide_user_name: Optional[bool] = Field(default=UNSET, alias="hideUserName")
    hide_language_switcher: Optional[bool] = Field(default=UNSET, alias="hideLanguageSwitcher")
    show_modal_on_connect_success: Optional[bool] = Field(default=UNSET, alias="showModalOnConnectSuccess")
    language: LanguageOrStr = Language.EN
    max_social_accounts_connected: Optional[float] = Field(default=UNSET, alias="maxSocialAccountsConnected")


class ApiV1SocialAccountCreatePortalLinkRequestDict(TypedDict):
    team_id: str
    redirect_url: NotRequired[str]
    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr]
    server_url: NotRequired[str]
    disable_auto_login: NotRequired[bool]
    tiktok_force_login: NotRequired[bool]
    force_browser_o_auth: NotRequired[bool]
    instagram_connection_method: NotRequired[InstagramConnectionMethodBundleSocialSocialAccountApiOrStr]
    with_business_scope: NotRequired[bool]
    with_messaging_scope: NotRequired[bool]
    expires_in: NotRequired[int]
    logo_url: NotRequired[str]
    user_logo_url: NotRequired[str]
    user_name: NotRequired[str]
    go_back_button_text: NotRequired[str]
    hide_powered_by: NotRequired[bool]
    hide_go_back_button: NotRequired[bool]
    hide_user_logo: NotRequired[bool]
    hide_user_name: NotRequired[bool]
    hide_language_switcher: NotRequired[bool]
    show_modal_on_connect_success: NotRequired[bool]
    language: NotRequired[LanguageOrStr]
    max_social_accounts_connected: NotRequired[float]
