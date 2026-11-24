from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Header2(SdkBaseModel):
    """Header embodying a key and a value. Do not put business sensitive or personally identifying data in the HTTP
    Header Override Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the
    `Service Specific Terms <https://cloud.google.com/terms/service-terms>`__."""

    value: Optional[str] = UNSET
    """The Value of the header."""

    key: Optional[str] = UNSET
    """The Key of the header."""


class Header2Dict(TypedDict):
    value: NotRequired[str]
    key: NotRequired[str]
