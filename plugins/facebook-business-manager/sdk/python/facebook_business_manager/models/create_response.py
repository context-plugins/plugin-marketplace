from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the newly created object"""


class CreateResponseDict(TypedDict):
    id: NotRequired[str]
