from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_label_description import DatasetLabelDescription, DatasetLabelDescriptionDict


class ListDatasetLabelsResponse(SdkBaseModel):
    dataset_label_descriptions: Optional[list[DatasetLabelDescription]] = Field(
        default=UNSET, alias="DatasetLabelDescriptions"
    )
    """A list of the labels in the dataset."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom
    Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    results."""


class ListDatasetLabelsResponseDict(TypedDict):
    dataset_label_descriptions: NotRequired[list[DatasetLabelDescriptionDict]]
    next_token: NotRequired[str]
