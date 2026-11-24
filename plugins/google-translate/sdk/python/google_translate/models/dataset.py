from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Dataset(SdkBaseModel):
    """A dataset that hosts the examples (sentence pairs) used for translation models."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """The BCP-47 language code of the target language."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """The BCP-47 language code of the source language."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp when this dataset was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only
    of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9."""

    example_count: Optional[int] = Field(default=UNSET, alias="exampleCount")
    """Output only. The number of examples in the dataset."""

    train_example_count: Optional[int] = Field(default=UNSET, alias="trainExampleCount")
    """Output only. Number of training examples (sentence pairs)."""

    test_example_count: Optional[int] = Field(default=UNSET, alias="testExampleCount")
    """Output only. Number of test examples (sentence pairs)."""

    name: Optional[str] = UNSET
    """The resource name of the dataset, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}``"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp when this dataset was created."""

    validate_example_count: Optional[int] = Field(default=UNSET, alias="validateExampleCount")
    """Output only. Number of validation examples (sentence pairs)."""


class DatasetDict(TypedDict):
    target_language_code: NotRequired[str]
    source_language_code: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    example_count: NotRequired[int]
    train_example_count: NotRequired[int]
    test_example_count: NotRequired[int]
    name: NotRequired[str]
    create_time: NotRequired[str]
    validate_example_count: NotRequired[int]
