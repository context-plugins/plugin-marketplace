from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ground_truth_manifest import GroundTruthManifest, GroundTruthManifestDict


class DatasetSource(SdkBaseModel):
    ground_truth_manifest: Optional[GroundTruthManifest] = Field(default=UNSET, alias="GroundTruthManifest")
    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy."""


class DatasetSourceDict(TypedDict):
    ground_truth_manifest: NotRequired[GroundTruthManifestDict]
    dataset_arn: NotRequired[str]
