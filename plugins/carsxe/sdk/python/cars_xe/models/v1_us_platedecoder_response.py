from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input import Input, InputDict
from .specs_response1 import SpecsResponse1, SpecsResponse1Dict


class V1UsPlatedecoderResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Input] = UNSET
    vin: Optional[str] = UNSET
    year: Optional[str] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    trim: Optional[str] = UNSET
    description: Optional[str] = UNSET
    engine_size: Optional[str] = UNSET
    body_style: Optional[str] = UNSET
    transmission: Optional[str] = UNSET
    drive_type: Optional[str] = UNSET
    fuel_type: Optional[str] = UNSET
    color: Optional[str] = UNSET
    vehicle_specs: Optional[SpecsResponse1] = UNSET
    """Full vehicle specifications (only present when ``decodeVIN=true``)."""


class V1UsPlatedecoderResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[InputDict]
    vin: NotRequired[str]
    year: NotRequired[str]
    make: NotRequired[str]
    model: NotRequired[str]
    trim: NotRequired[str]
    description: NotRequired[str]
    engine_size: NotRequired[str]
    body_style: NotRequired[str]
    transmission: NotRequired[str]
    drive_type: NotRequired[str]
    fuel_type: NotRequired[str]
    color: NotRequired[str]
    vehicle_specs: NotRequired[SpecsResponse1Dict]
