from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .geo import Geo, GeoDict
from .rule1 import Rule1, Rule1Dict
from .unions.tag_ids import TagIds, TagIdsDict
from .unions.tag_names import TagNames, TagNamesDict


class LinksRequest1(SdkBaseModel):
    url: Optional[str] = UNSET
    """The destination URL of the short link."""

    domain: Optional[str] = UNSET
    """The domain of the short link. If not provided, the main domain of the project will be used (or ``codeqr.link`` if
    the project has no domains)."""

    key: Optional[str] = UNSET
    """The slug of the short link. If not provided, a random 7-character slug will be generated."""

    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    """This is the ID of the link in your database. If set, it can be used to identify the link in the future. Must be
    prefixed with ``ext_`` when passed as a query parameter."""

    prefix: Optional[str] = UNSET
    """The prefix of the short link slug for randomly generated keys (for example, if the prefix is ``/c/``, the
    generated keys will be in the format ``/c/:key``). Will be ignored if ``key`` is provided."""

    track_conversion: bool = Field(default=False, alias="trackConversion")
    """Whether to track conversions for the short link."""

    use_as_template: bool = Field(default=False, alias="useAsTemplate")
    """Whether this link should be used as a reusable template."""

    archived: bool = False
    """Whether the short link is archived."""

    expires_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """The date and time when the short link will expire in ISO-8601 format. Must be in the future."""

    expired_url: OptionalNullable[str] = Field(default=UNSET, alias="expiredUrl")
    """The URL to redirect to when the short link expires."""

    password: OptionalNullable[str] = UNSET
    """The password required to access the short link destination URL."""

    proxy: bool = False
    """Whether the short link uses the custom link preview feature."""

    title: OptionalNullable[str] = UNSET
    """The title of the short link generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    description: OptionalNullable[str] = UNSET
    """The description of the short link generated via ``api.codeqr.io/metatags``. Will be used for custom link preview
    if ``proxy`` is true."""

    image: OptionalNullable[str] = UNSET
    """The image of the short link generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    video: OptionalNullable[str] = UNSET
    """The video of the short link."""

    rewrite: bool = False
    """Whether the short link uses link cloaking."""

    ios: OptionalNullable[str] = UNSET
    """The iOS destination URL for the short link for iOS device targeting."""

    android: OptionalNullable[str] = UNSET
    """The Android destination URL for the short link for Android device targeting."""

    geo: OptionalNullable[Geo] = UNSET
    """Geographic targeting information for the short link in JSON format ``{[COUNTRY]: https://example.com }``."""

    rules: OptionalNullable[list[Rule1]] = UNSET
    """Smart rules for conditional destination routing by request attribute."""

    do_index: bool = Field(default=False, alias="doIndex")
    """Allow search engines to index your short link. Default is ``false`` if not provided. Learn more:
    https://codeqr.link/noindex"""

    webhook_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="webhookIds")
    """An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data."""

    public_stats: bool = Field(default=False, alias="publicStats")
    """Whether the short link statistics are publicly accessible."""

    tag_id: OptionalNullable[str] = Field(default=UNSET, alias="tagId")
    """The unique ID of the tag assigned to the short link. This field is deprecated – use ``tagIds`` instead."""

    tag_ids: Optional[TagIds] = Field(default=UNSET, alias="tagIds")
    """The unique IDs of the tags assigned to the short link."""

    tag_names: Optional[TagNames] = Field(default=UNSET, alias="tagNames")
    """The unique name of the tags assigned to the short link (case insensitive)."""

    folder_id: OptionalNullable[str] = Field(default=UNSET, alias="folderId")
    """The unique ID existing folder to assign the short link to."""

    comments: OptionalNullable[str] = UNSET
    """The comments for the short link."""

    flexible: bool = False
    """Whether the short link is flexible."""

    pre_redirection: bool = Field(default=False, alias="preRedirection")
    """Whether the short link has pre-redirection."""

    page_id: OptionalNullable[str] = Field(default=UNSET, alias="pageId")
    """The ID of the page to redirect to before the link destination."""

    page_url: OptionalNullable[str] = Field(default=UNSET, alias="pageUrl")
    """The URL of the page to redirect to before the link destination."""

    is_form_mandatory: bool = Field(default=False, alias="isFormMandatory")
    """If the form is mandatory for the page."""


class LinksRequest1Dict(TypedDict):
    url: NotRequired[str]
    domain: NotRequired[str]
    key: NotRequired[str]
    external_id: NotRequired[str | None]
    prefix: NotRequired[str]
    track_conversion: NotRequired[bool]
    use_as_template: NotRequired[bool]
    archived: NotRequired[bool]
    expires_at: NotRequired[RFC3339DateTime | None]
    expired_url: NotRequired[str | None]
    password: NotRequired[str | None]
    proxy: NotRequired[bool]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    image: NotRequired[str | None]
    video: NotRequired[str | None]
    rewrite: NotRequired[bool]
    ios: NotRequired[str | None]
    android: NotRequired[str | None]
    geo: NotRequired[GeoDict | None]
    rules: NotRequired[list[Rule1Dict] | None]
    do_index: NotRequired[bool]
    webhook_ids: NotRequired[list[str] | None]
    public_stats: NotRequired[bool]
    tag_id: NotRequired[str | None]
    tag_ids: NotRequired[TagIdsDict]
    tag_names: NotRequired[TagNamesDict]
    folder_id: NotRequired[str | None]
    comments: NotRequired[str | None]
    flexible: NotRequired[bool]
    pre_redirection: NotRequired[bool]
    page_id: NotRequired[str | None]
    page_url: NotRequired[str | None]
    is_form_mandatory: NotRequired[bool]
