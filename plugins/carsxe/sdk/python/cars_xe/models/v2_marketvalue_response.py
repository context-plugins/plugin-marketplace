from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2MarketvalueResponse(SdkBaseModel):
    uid: Optional[str] = UNSET
    input: Optional[Any] = UNSET
    publish_date: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    model_year: Optional[str] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    series: Optional[str] = UNSET
    style: Optional[str] = UNSET
    class_name: Optional[str] = UNSET
    whole_xclean: Optional[Any] = UNSET
    whole_clean: Optional[Any] = UNSET
    whole_avg: Optional[Any] = UNSET
    whole_rough: Optional[Any] = UNSET
    retail_xclean: Optional[Any] = UNSET
    retail_clean: Optional[Any] = UNSET
    retail_avg: Optional[Any] = UNSET
    retail_rough: Optional[Any] = UNSET


class V2MarketvalueResponseDict(TypedDict):
    uid: NotRequired[str]
    input: NotRequired[Any]
    publish_date: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    model_year: NotRequired[str]
    make: NotRequired[str]
    model: NotRequired[str]
    series: NotRequired[str]
    style: NotRequired[str]
    class_name: NotRequired[str]
    whole_xclean: NotRequired[Any]
    whole_clean: NotRequired[Any]
    whole_avg: NotRequired[Any]
    whole_rough: NotRequired[Any]
    retail_xclean: NotRequired[Any]
    retail_clean: NotRequired[Any]
    retail_avg: NotRequired[Any]
    retail_rough: NotRequired[Any]
