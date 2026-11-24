from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecordDayBooleanOrUndefined(SdkBaseModel):
    """Construct a type with a set of properties K of type T"""

    monday: Optional[bool] = UNSET
    tuesday: Optional[bool] = UNSET
    wednesday: Optional[bool] = UNSET
    thursday: Optional[bool] = UNSET
    friday: Optional[bool] = UNSET
    saturday: Optional[bool] = UNSET
    sunday: Optional[bool] = UNSET


class RecordDayBooleanOrUndefinedDict(TypedDict):
    monday: NotRequired[bool]
    tuesday: NotRequired[bool]
    wednesday: NotRequired[bool]
    thursday: NotRequired[bool]
    friday: NotRequired[bool]
    saturday: NotRequired[bool]
    sunday: NotRequired[bool]
