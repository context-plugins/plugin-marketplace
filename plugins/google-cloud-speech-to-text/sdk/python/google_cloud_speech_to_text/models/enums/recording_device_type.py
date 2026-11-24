from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecordingDeviceType(str, Enum):
    """The type of device the speech was recorded with."""

    RECORDING_DEVICE_TYPE_UNSPECIFIED = "RECORDING_DEVICE_TYPE_UNSPECIFIED"
    SMARTPHONE = "SMARTPHONE"
    PC = "PC"
    PHONE_LINE = "PHONE_LINE"
    VEHICLE = "VEHICLE"
    OTHER_OUTDOOR_DEVICE = "OTHER_OUTDOOR_DEVICE"
    OTHER_INDOOR_DEVICE = "OTHER_INDOOR_DEVICE"

    __str__ = str.__str__


RecordingDeviceTypeOrStr: TypeAlias = Annotated[RecordingDeviceType | str, open_enum_validator(RecordingDeviceType)]
