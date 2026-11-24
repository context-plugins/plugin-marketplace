from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Model(SdkBaseModel):
    """A trained translation model."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Output only. The BCP-47 language code of the source language."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp when this model was last updated."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Output only. The BCP-47 language code of the target language."""

    train_example_count: Optional[int] = Field(default=UNSET, alias="trainExampleCount")
    """Output only. Number of examples (sentence pairs) used to train the model."""

    test_example_count: Optional[int] = Field(default=UNSET, alias="testExampleCount")
    """Output only. Number of examples (sentence pairs) used to test the model."""

    dataset: Optional[str] = UNSET
    """Required. The dataset from which the model is trained, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of
    ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp when the model resource was created, which is also when the training started."""

    validate_example_count: Optional[int] = Field(default=UNSET, alias="validateExampleCount")
    """Output only. Number of examples (sentence pairs) used to validate the model."""

    name: Optional[str] = UNSET
    """The resource name of the model, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/models/{model_id}``"""


class ModelDict(TypedDict):
    source_language_code: NotRequired[str]
    update_time: NotRequired[str]
    target_language_code: NotRequired[str]
    train_example_count: NotRequired[int]
    test_example_count: NotRequired[int]
    dataset: NotRequired[str]
    display_name: NotRequired[str]
    create_time: NotRequired[str]
    validate_example_count: NotRequired[int]
    name: NotRequired[str]
