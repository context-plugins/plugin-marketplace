from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type1 import Type1OrStr
from .frame_text_styles1 import FrameTextStyles1, FrameTextStyles1Dict
from .geo_codeqr_io_qr_codes_api import GeoCodeqrIoQrCodesApi, GeoCodeqrIoQrCodesApiDict
from .rule1 import Rule1, Rule1Dict
from .unions.tag_ids import TagIds, TagIdsDict
from .unions.tag_names import TagNames, TagNamesDict
from .whatsapp import Whatsapp, WhatsappDict


class QrcodesRequest(SdkBaseModel):
    domain: Optional[str] = UNSET
    """The domain of the QR code. If not provided, the main domain of the project will be used (or ``codeqr.link`` if
    the project does not have domains)."""

    key: Optional[str] = UNSET
    """The slug of the QR code. If not provided, a random slug of 7 characters will be generated."""

    prefix: Optional[str] = UNSET
    """The prefix for the randomly generated key. If provided, the key will be prefixed with this value."""

    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    """This is the ID of the QR code in your database. If defined, it can be used to identify the QR code in the future.
    It must be prefixed with ``ext_`` when passed as a query parameter."""

    track_conversion: bool = Field(default=False, alias="trackConversion")
    """If should track conversions for the QR code."""

    template_id: OptionalNullable[str] = Field(default=UNSET, alias="templateId")
    """ID of a QR code (in the same project) marked as a template. Its customization fields (colors, logo, pattern,
    shape, frame) will be applied to the new QR code unless explicitly overridden."""

    use_as_template: bool = Field(default=False, alias="useAsTemplate")
    """Whether this QR code should be used as a reusable template."""

    archived: bool = False
    """If the QR code is archived."""

    expires_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """The date and time the QR code will expire in ISO-8601 format. Must be in the future."""

    expired_url: OptionalNullable[str] = Field(default=UNSET, alias="expiredUrl")
    """The URL to redirect when the QR code expires."""

    password: OptionalNullable[str] = UNSET
    """The password required to access the destination URL of the QR code."""

    proxy: bool = False
    """If the QR code uses the custom link preview feature."""

    title: OptionalNullable[str] = UNSET
    """The title of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    description: OptionalNullable[str] = UNSET
    """The description of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    image: OptionalNullable[str] = UNSET
    """The image of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    rewrite: bool = False
    """If the QR code uses link cloaking."""

    ios: OptionalNullable[str] = UNSET
    """The destination URL for iOS for the QR code for device targeting iOS."""

    android: OptionalNullable[str] = UNSET
    """The destination URL for Android for the QR code for device targeting Android."""

    geo: OptionalNullable[GeoCodeqrIoQrCodesApi] = UNSET
    """Geographic segmentation information for the QR code in the JSON format ``{[COUNTRY]: https://example.com }``."""

    rules: OptionalNullable[list[Rule1]] = UNSET
    """Smart rules for conditional destination routing by request attribute."""

    do_index: bool = Field(default=False, alias="doIndex")
    """Allow search engines to index your QR code. The default is ``false`` if not provided. Learn more:
    https://codeqr.link/noindex"""

    webhook_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="webhookIds")
    """An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data."""

    public_stats: bool = Field(default=False, alias="publicStats")
    """If the statistics of the QR code are publicly accessible."""

    tag_id: OptionalNullable[str] = Field(default=UNSET, alias="tagId")
    """The unique ID of the tag assigned to the QR code. This field is deprecated – use ``tagIds`` instead."""

    tag_ids: Optional[TagIds] = Field(default=UNSET, alias="tagIds")
    """The unique IDs of the tags assigned to the QR code."""

    tag_names: Optional[TagNames] = Field(default=UNSET, alias="tagNames")
    """The unique name of the tags assigned to the QR code (case insensitive)."""

    folder_id: OptionalNullable[str] = Field(default=UNSET, alias="folderId")
    """The unique ID of the folder assigned to the QR code. Omit or set to null for no folder."""

    comments: OptionalNullable[str] = UNSET
    """The comments for the QR code."""

    flexible: bool = False
    """If the QR code is flexible."""

    filled: bool = False
    """If the QR code is filled."""

    static: bool = False
    """If the QR code is static."""

    use_display_page: bool = Field(default=True, alias="useDisplayPage")
    """For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page with buttons. If
    false, redirects directly to tel:/mailto:/sms: URI."""

    type_: Type1OrStr = Field(alias="type")
    """The type of content of the QR code."""

    text: OptionalNullable[str] = UNSET
    """The text of the QR code."""

    email: OptionalNullable[dict[str, str]] = UNSET
    """The email information of the QR code."""

    wifi: OptionalNullable[dict[str, str]] = UNSET
    """The WiFi information of the QR code."""

    url: OptionalNullable[str] = UNSET
    """The destination URL of the QR code."""

    phone: OptionalNullable[str] = UNSET
    """The phone number of the QR code."""

    vcard: OptionalNullable[dict[str, str]] = UNSET
    """The vCard information of the QR code."""

    crypto: OptionalNullable[dict[str, str]] = UNSET
    """The cryptocurrency information of the QR code."""

    sms: OptionalNullable[dict[str, str]] = UNSET
    """The SMS information of the QR code."""

    whatsapp: OptionalNullable[Whatsapp] = UNSET
    """The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message."""

    facetime: OptionalNullable[dict[str, str]] = UNSET
    """The FaceTime information of the QR code."""

    latlog: OptionalNullable[dict[str, str]] = UNSET
    """The latitude and longitude information of the QR code."""

    pix: Optional[Any] = UNSET
    """The Pix information of the QR code (key, name, city, amount, description)."""

    logo: OptionalNullable[str] = UNSET
    """The logo of the QR code."""

    bg_color: str = Field(default="#ffffff", alias="bgColor")
    """The background color of the QR code (hex or CSS keyword). Invalid values are coerced to default."""

    fg_color: str = Field(default="#000000", alias="fgColor")
    """The foreground color of the QR code (hex or CSS keyword). Invalid values are coerced to default."""

    size: float = 1024.0
    """The size of the QR code."""

    level: str = "M"
    """The level of error correction of the QR code."""

    show_logo: bool = Field(default=True, alias="showLogo")
    """If the logo should be displayed in the QR code."""

    src: OptionalNullable[str] = UNSET
    """The image URL of the QR code."""

    height: Optional[float] = UNSET
    """Logo height in pixels. When omitted, a proportional size is used based on the QR code size (about 10–20%
    depending on size)."""

    width: Optional[float] = UNSET
    """Logo width in pixels. When omitted, a proportional size is used based on the QR code size (about 10–20% depending
    on size)."""

    excavate: bool = True
    """If the QR code should have excavated areas."""

    pattern: str = "default"
    """The pattern of the modules of the QR code."""

    shape: str = "none"
    """The shape of the design around the QR code (none, square, circle)."""

    frame: str = "none"
    """The type of frame of the QR code (e.g. none, frame-1, frame-2, frame-3, frame-5, frame-6). frame-5/6 are top-bar
    variants. Unknown ids fall back to no frame at render."""

    frame_color: str = Field(default="#000000", alias="frameColor")
    """The color of the frame (hex or CSS keyword). Invalid values are coerced to default."""

    frame_text: Optional[str] = Field(default=UNSET, alias="frameText")
    """Label text rendered inside the frame (e.g. "SCAN ME", a product SKU). Maximum 200 characters. Word-wraps to
    multiple lines at larger sizes; the frame bar grows vertically to fit."""

    frame_text_color: OptionalNullable[str] = Field(default=UNSET, alias="frameTextColor")
    """Color of the frame label text (hex ``#RRGGBB``, ``#RGB``, ``#RRGGBBAA``, or a CSS keyword from the allowlist).
    When omitted, a contrasting color is derived automatically from ``frameColor``."""

    frame_text_styles: OptionalNullable[FrameTextStyles1] = Field(default=UNSET, alias="frameTextStyles")
    """Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or out-of-enum values
    are rejected to prevent SVG attribute injection. All fields are optional; omitted keys fall back to the default
    (normal weight, normal style, sans family, medium size)."""

    pre_redirection: bool = Field(default=False, alias="preRedirection")
    """If the QR code has pre-redirection."""

    page_id: OptionalNullable[str] = Field(default=UNSET, alias="pageId")
    """The ID of the page to redirect to before the QR code destination."""

    page_url: OptionalNullable[str] = Field(default=UNSET, alias="pageUrl")
    """The URL of the page to redirect to before the QR code destination."""

    is_form_mandatory: bool = Field(default=False, alias="isFormMandatory")
    """If the form is mandatory for the page."""


class QrcodesRequestDict(TypedDict):
    domain: NotRequired[str]
    key: NotRequired[str]
    prefix: NotRequired[str]
    external_id: NotRequired[str | None]
    track_conversion: NotRequired[bool]
    template_id: NotRequired[str | None]
    use_as_template: NotRequired[bool]
    archived: NotRequired[bool]
    expires_at: NotRequired[RFC3339DateTime | None]
    expired_url: NotRequired[str | None]
    password: NotRequired[str | None]
    proxy: NotRequired[bool]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    image: NotRequired[str | None]
    rewrite: NotRequired[bool]
    ios: NotRequired[str | None]
    android: NotRequired[str | None]
    geo: NotRequired[GeoCodeqrIoQrCodesApiDict | None]
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
    filled: NotRequired[bool]
    static: NotRequired[bool]
    use_display_page: NotRequired[bool]
    type_: Type1OrStr
    text: NotRequired[str | None]
    email: NotRequired[dict[str, str] | None]
    wifi: NotRequired[dict[str, str] | None]
    url: NotRequired[str | None]
    phone: NotRequired[str | None]
    vcard: NotRequired[dict[str, str] | None]
    crypto: NotRequired[dict[str, str] | None]
    sms: NotRequired[dict[str, str] | None]
    whatsapp: NotRequired[WhatsappDict | None]
    facetime: NotRequired[dict[str, str] | None]
    latlog: NotRequired[dict[str, str] | None]
    pix: NotRequired[Any]
    logo: NotRequired[str | None]
    bg_color: NotRequired[str]
    fg_color: NotRequired[str]
    size: NotRequired[float]
    level: NotRequired[str]
    show_logo: NotRequired[bool]
    src: NotRequired[str | None]
    height: NotRequired[float]
    width: NotRequired[float]
    excavate: NotRequired[bool]
    pattern: NotRequired[str]
    shape: NotRequired[str]
    frame: NotRequired[str]
    frame_color: NotRequired[str]
    frame_text: NotRequired[str]
    frame_text_color: NotRequired[str | None]
    frame_text_styles: NotRequired[FrameTextStyles1Dict | None]
    pre_redirection: NotRequired[bool]
    page_id: NotRequired[str | None]
    page_url: NotRequired[str | None]
    is_form_mandatory: NotRequired[bool]
