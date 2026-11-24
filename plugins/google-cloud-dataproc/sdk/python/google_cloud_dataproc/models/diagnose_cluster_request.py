from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tarball_access import TarballAccessOrStr
from .interval2 import Interval2, Interval2Dict


class DiagnoseClusterRequest(SdkBaseModel):
    """A request to collect cluster diagnostic information."""

    yarn_application_ids: Optional[list[str]] = Field(default=UNSET, alias="yarnApplicationIds")
    """Optional. Specifies a list of yarn applications on which diagnosis is to be performed."""

    yarn_application_id: Optional[str] = Field(default=UNSET, alias="yarnApplicationId")
    """Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed."""

    diagnosis_interval: Optional[Interval2] = Field(default=UNSET, alias="diagnosisInterval")
    """Optional. Time interval in which diagnosis should be carried out on the cluster."""

    job: Optional[str] = UNSET
    """Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format:
    projects/{project}/regions/{region}/jobs/{job}"""

    tarball_access: Optional[TarballAccessOrStr] = Field(default=UNSET, alias="tarballAccess")
    """Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of
    the bucket"""

    jobs: Optional[list[str]] = UNSET
    """Optional. Specifies a list of jobs on which diagnosis is to be performed. Format:
    projects/{project}/regions/{region}/jobs/{job}"""

    tarball_gcs_dir: Optional[str] = Field(default=UNSET, alias="tarballGcsDir")
    """Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a
    task-specific directory in the cluster's staging bucket will be used."""


class DiagnoseClusterRequestDict(TypedDict):
    yarn_application_ids: NotRequired[list[str]]
    yarn_application_id: NotRequired[str]
    diagnosis_interval: NotRequired[Interval2Dict]
    job: NotRequired[str]
    tarball_access: NotRequired[TarballAccessOrStr]
    jobs: NotRequired[list[str]]
    tarball_gcs_dir: NotRequired[str]
