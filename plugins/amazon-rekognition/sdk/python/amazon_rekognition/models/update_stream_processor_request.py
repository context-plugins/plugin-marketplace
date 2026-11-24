from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.parameters_to_delete import ParametersToDeleteOrStr
from .region_of_interest import RegionOfInterest, RegionOfInterestDict
from .stream_processor_data_sharing_preference import (
    StreamProcessorDataSharingPreference,
    StreamProcessorDataSharingPreferenceDict,
)
from .stream_processor_settings_for_update import StreamProcessorSettingsForUpdate, StreamProcessorSettingsForUpdateDict


class UpdateStreamProcessorRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """Name of the stream processor that you want to update."""

    settings_for_update: Optional[StreamProcessorSettingsForUpdate] = Field(default=UNSET, alias="SettingsForUpdate")
    regions_of_interest_for_update: Optional[list[RegionOfInterest]] = Field(
        default=UNSET, alias="RegionsOfInterestForUpdate"
    )
    """Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional
    parameter for label detection stream processors."""

    data_sharing_preference_for_update: Optional[StreamProcessorDataSharingPreference] = Field(
        default=UNSET, alias="DataSharingPreferenceForUpdate"
    )
    parameters_to_delete: Optional[list[ParametersToDeleteOrStr]] = Field(default=UNSET, alias="ParametersToDelete")
    """A list of parameters you want to delete from the stream processor."""


class UpdateStreamProcessorRequestDict(TypedDict):
    name: str
    settings_for_update: NotRequired[StreamProcessorSettingsForUpdateDict]
    regions_of_interest_for_update: NotRequired[list[RegionOfInterestDict]]
    data_sharing_preference_for_update: NotRequired[StreamProcessorDataSharingPreferenceDict]
    parameters_to_delete: NotRequired[list[ParametersToDeleteOrStr]]
