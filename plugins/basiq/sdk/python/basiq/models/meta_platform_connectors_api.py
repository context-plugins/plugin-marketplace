from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaPlatformConnectorsApi(SdkBaseModel):
    forgotten_password_url: Optional[str] = UNSET
    """URL to institution forgotten password page"""

    login_id_caption: Optional[str] = UNSET
    """Login ID field caption that should be shown on UI"""

    password_caption: Optional[str] = UNSET
    """Password field caption that should be shown on UI"""

    secondary_login_id_caption: Optional[str] = UNSET
    """Secondary loginID caption that should be shown on UI"""

    security_code_caption: Optional[str] = UNSET
    """Security code caption that should be shown on UI"""


class MetaPlatformConnectorsApiDict(TypedDict):
    forgotten_password_url: NotRequired[str]
    login_id_caption: NotRequired[str]
    password_caption: NotRequired[str]
    secondary_login_id_caption: NotRequired[str]
    security_code_caption: NotRequired[str]
