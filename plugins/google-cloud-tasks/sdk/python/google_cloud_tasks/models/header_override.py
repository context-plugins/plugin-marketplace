from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .header2 import Header2, Header2Dict


class HeaderOverride(SdkBaseModel):
    """Wraps the Header object."""

    header: Optional[Header2] = UNSET
    """Header embodying a key and a value. Do not put business sensitive or personally identifying data in the HTTP
    Header Override Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the
    `Service Specific Terms <https://cloud.google.com/terms/service-terms>`__."""


class HeaderOverrideDict(TypedDict):
    header: NotRequired[Header2Dict]
