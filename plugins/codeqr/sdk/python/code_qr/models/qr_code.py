from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.type_codeqr_io_qr_codes_api import TypeCodeqrIoQrCodesApiOrStr
from .frame_text_styles import FrameTextStyles, FrameTextStylesDict
from .rule import Rule, RuleDict
from .tag_model import TagModel, TagModelDict
from .whatsapp import Whatsapp, WhatsappDict


class QrCode(SdkBaseModel):
    id: str
    """The unique ID of the QR code."""

    domain: str
    """The domain of the QR code. If not provided, the main domain of the project will be used (or ``codeqr.link`` if
    the project does not have domains)."""

    key: str
    """The slug of the QR code. If not provided, a random slug of 7 characters will be generated."""

    archived: bool = False
    """If the QR code is archived."""

    expires_at: str | None = Field(alias="expiresAt")
    """The date and time the QR code will expire in ISO-8601 format. Must be in the future."""

    expired_url: str | None = Field(alias="expiredUrl")
    """The destination URL when the QR code expires."""

    password: str | None
    """The password required to access the destination URL of the QR code."""

    external_id: str | None = Field(alias="externalId")
    """The external ID associated with the QR code."""

    track_conversion: bool = Field(default=False, alias="trackConversion")
    """[BETA] If should track conversions for the QR code."""

    proxy: bool = False
    """If the QR code uses the custom link preview feature."""

    title: str | None
    """The title of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    description: str | None
    """The description of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    image: str | None
    """The image of the QR code generated via ``api.codeqr.io/metatags``. Will be used for custom link preview if
    ``proxy`` is true."""

    utm_source: str | None
    """The source UTM of the QR code."""

    utm_medium: str | None
    """The medium UTM of the QR code."""

    utm_campaign: str | None
    """The campaign UTM of the QR code."""

    utm_term: str | None
    """The term UTM of the QR code."""

    utm_content: str | None
    """The content UTM of the QR code."""

    rewrite: bool = False
    """If the QR code uses link cloaking."""

    do_index: bool = Field(default=False, alias="doIndex")
    """If the QR code should be indexed."""

    flexible: bool = False
    """If the QR code is flexible."""

    filled: bool = False
    """If the QR code is filled."""

    ios: str | None
    """The destination URL for iOS for the QR code for device targeting iOS."""

    android: str | None
    """The destination URL for Android for the QR code for device targeting Android."""

    geo: dict[str, str] | None
    """Geographic segmentation information for the QR code in the JSON format ``{[COUNTRY]: https://example.com }``.
    Learn more: https://codeqr.link/geo"""

    rules: list[Rule] | None
    """Smart rules for conditional destination routing by request attribute."""

    static: bool = False
    """If the QR code is static."""

    use_display_page: bool = Field(default=True, alias="useDisplayPage")
    """For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page with buttons. If
    false, redirects directly to tel:/mailto:/sms: URI."""

    type_: TypeCodeqrIoQrCodesApiOrStr = Field(alias="type")
    """The type of the QR code."""

    content_static: str | None = Field(alias="contentStatic")
    """The static content of the QR code."""

    text: str | None
    """The text of the QR code."""

    email: dict[str, str] | None
    """The email information of the QR code."""

    wifi: dict[str, str] | None
    """The WiFi information of the QR code."""

    url: str | None
    """The URL of the QR code."""

    phone: str | None
    """The phone number of the QR code."""

    vcard: dict[str, str] | None
    """The vCard information of the QR code."""

    crypto: dict[str, str] | None
    """The cryptocurrency information of the QR code."""

    sms: dict[str, str] | None
    """The SMS information of the QR code."""

    whatsapp: Whatsapp | None
    """The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message."""

    facetime: dict[str, str] | None
    """The FaceTime information of the QR code."""

    latlog: dict[str, str] | None
    """The latitude and longitude information of the QR code."""

    logo: str | None
    """The logo of the QR code."""

    bg_color: str = Field(alias="bgColor")
    """The background color of the QR code."""

    fg_color: str = Field(alias="fgColor")
    """The foreground color of the QR code."""

    size: float
    """The size of the QR code."""

    level: str
    """The level of error correction of the QR code."""

    show_logo: bool = Field(default=False, alias="showLogo")
    """If the logo should be displayed in the QR code."""

    src: str | None
    """The source of the QR code."""

    height: float
    """The height of the QR code."""

    width: float
    """The width of the QR code."""

    excavate: bool = False
    """If the QR code should be excavated."""

    user_id: str | None = Field(alias="userId")
    """The ID of the user that created the QR code."""

    project_id: str | None = Field(alias="projectId")
    """The ID of the project of the QR code."""

    public_stats: bool = Field(default=False, alias="publicStats")
    """If the statistics of the QR code are publicly accessible."""

    scans: float = 0.0
    """The number of scans of the QR code."""

    last_clicked: str | None = Field(alias="lastClicked")
    """The date and time the QR code was scanned last."""

    leads: float = 0.0
    """The number of leads generated by the QR code."""

    sales: float = 0.0
    """The number of sales generated by the QR code."""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The amount of the sale generated by the link."""

    created_at: str = Field(alias="createdAt")
    """The date and time the QR code was created."""

    updated_at: str = Field(alias="updatedAt")
    """The date and time the QR code was updated last."""

    tag_id: str | None = Field(alias="tagId")
    """[DEPRECATED (use ``tags`` instead)]: The unique ID of the tag assigned to the QR code."""

    tags: list[TagModel] | None
    """The tags assigned to the QR code."""

    folder_id: str | None = Field(alias="folderId")
    """The unique ID of the folder assigned to the QR code."""

    comments: str | None
    """The comments for the QR code."""

    frame_text_styles: OptionalNullable[FrameTextStyles] = Field(default=UNSET, alias="frameTextStyles")
    """Typographic styles applied to the frame label text. Object with optional keys: ``weight`` (``normal`` |
    ``bold``), ``style`` (``normal`` | ``italic``), ``family`` (``sans`` | ``sans-condensed`` | ``serif`` |
    ``serif-elegant`` | ``mono``), ``size`` (``s`` | ``m`` | ``l`` | ``xl``). Every field is enum-gated on write;
    omitted keys render with defaults."""

    notification_token: str | None = Field(alias="notificationToken")
    """The notification token of the QR code."""

    pre_redirection: bool = Field(default=False, alias="preRedirection")
    """If the QR code has pre-redirection."""

    page_id: OptionalNullable[str] = Field(default=UNSET, alias="pageId")
    """The ID of the page to redirect to before the QR code destination."""

    page_url: OptionalNullable[str] = Field(default=UNSET, alias="pageUrl")
    """The URL of the page to redirect to before the QR code destination."""

    is_form_mandatory: bool = Field(default=False, alias="isFormMandatory")
    """If the form is mandatory for the page."""


class QrCodeDict(TypedDict):
    id: str
    domain: str
    key: str
    archived: bool
    expires_at: str | None
    expired_url: str | None
    password: str | None
    external_id: str | None
    track_conversion: bool
    proxy: bool
    title: str | None
    description: str | None
    image: str | None
    utm_source: str | None
    utm_medium: str | None
    utm_campaign: str | None
    utm_term: str | None
    utm_content: str | None
    rewrite: bool
    do_index: bool
    flexible: bool
    filled: bool
    ios: str | None
    android: str | None
    geo: dict[str, str] | None
    rules: list[RuleDict] | None
    static: bool
    use_display_page: bool
    type_: TypeCodeqrIoQrCodesApiOrStr
    content_static: str | None
    text: str | None
    email: dict[str, str] | None
    wifi: dict[str, str] | None
    url: str | None
    phone: str | None
    vcard: dict[str, str] | None
    crypto: dict[str, str] | None
    sms: dict[str, str] | None
    whatsapp: WhatsappDict | None
    facetime: dict[str, str] | None
    latlog: dict[str, str] | None
    logo: str | None
    bg_color: str
    fg_color: str
    size: float
    level: str
    show_logo: bool
    src: str | None
    height: float
    width: float
    excavate: bool
    user_id: str | None
    project_id: str | None
    public_stats: bool
    scans: float
    last_clicked: str | None
    leads: float
    sales: float
    sale_amount: float
    created_at: str
    updated_at: str
    tag_id: str | None
    tags: list[TagModelDict] | None
    folder_id: str | None
    comments: str | None
    frame_text_styles: NotRequired[FrameTextStylesDict | None]
    notification_token: str | None
    pre_redirection: bool
    page_id: NotRequired[str | None]
    page_url: NotRequired[str | None]
    is_form_mandatory: bool
