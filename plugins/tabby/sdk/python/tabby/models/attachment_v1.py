from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .body import Body, BodyDict


class AttachmentV1(SdkBaseModel):
    """Extra data (booking info, insurance, flight reservations, ...) as serialized JSON"""

    body: Body
    """Should be an object containing any of the keys with corresponded sub objects"""

    content_type: str = "application/vnd.tabby.v1+json"
    """Version of used schema"""


class AttachmentV1Dict(TypedDict):
    body: BodyDict
    content_type: str
