from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .prop import Prop, PropDict


class PropsResponse(SdkBaseModel):
    props: Optional[list[Prop]] = UNSET


class PropsResponseDict(TypedDict):
    props: NotRequired[list[PropDict]]
