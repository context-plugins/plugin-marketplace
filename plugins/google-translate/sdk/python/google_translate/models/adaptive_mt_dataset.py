from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdaptiveMtDataset(SdkBaseModel):
    """An Adaptive MT Dataset."""

    example_count: Optional[int] = Field(default=UNSET, alias="exampleCount")
    """The number of examples in the dataset."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """The BCP-47 language code of the target language."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp when this dataset was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp when this dataset was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only
    of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the dataset, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}``"""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """The BCP-47 language code of the source language."""


class AdaptiveMtDatasetDict(TypedDict):
    example_count: NotRequired[int]
    target_language_code: NotRequired[str]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    name: NotRequired[str]
    source_language_code: NotRequired[str]
