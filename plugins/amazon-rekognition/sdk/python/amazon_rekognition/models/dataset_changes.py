from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DatasetChanges(SdkBaseModel):
    ground_truth: str = Field(alias="GroundTruth")
    """A Base64-encoded binary data object containing one or JSON lines that either update the dataset or are additions
    to the dataset. You change a dataset by calling UpdateDatasetEntries. If you are using an AWS SDK to call
    UpdateDatasetEntries, you don't need to encode Changes as the SDK encodes the data for you. For example JSON lines,
    see Image-Level labels in manifest files and and Object localization in manifest files in the Amazon Rekognition
    Custom Labels Developer Guide."""


class DatasetChangesDict(TypedDict):
    ground_truth: str
