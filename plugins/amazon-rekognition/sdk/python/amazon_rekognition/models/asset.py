from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ground_truth_manifest import GroundTruthManifest, GroundTruthManifestDict


class Asset(SdkBaseModel):
    ground_truth_manifest: Optional[GroundTruthManifest] = Field(default=UNSET, alias="GroundTruthManifest")


class AssetDict(TypedDict):
    ground_truth_manifest: NotRequired[GroundTruthManifestDict]
