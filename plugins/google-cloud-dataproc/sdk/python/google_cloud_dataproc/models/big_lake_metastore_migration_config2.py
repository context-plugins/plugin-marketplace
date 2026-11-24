from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .backfill_status2 import BackfillStatus2, BackfillStatus2Dict
from .enums.conflict_policy import ConflictPolicyOrStr
from .enums.mode import ModeOrStr
from .hive_config1 import HiveConfig1, HiveConfig1Dict
from .iceberg_config1 import IcebergConfig1, IcebergConfig1Dict


class BigLakeMetastoreMigrationConfig2(SdkBaseModel):
    """Configuration information specific to migrating from Dataproc Metastore to BigLake Metastore."""

    dry_run: Optional[bool] = Field(default=UNSET, alias="dryRun")
    """Optional. If true, performs discovery of requested resources and analysis against the target catalog to come up
    with a plan for each resource (e.g. Create, Update, Skip, etc.). No metadata is actually migrated."""

    backfill_status: Optional[BackfillStatus2] = Field(default=UNSET, alias="backfillStatus")
    """Output only."""

    conflict_policy: Optional[ConflictPolicyOrStr] = Field(default=UNSET, alias="conflictPolicy")
    """Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not specified."""

    mode: Optional[ModeOrStr] = UNSET
    """Required. Defines the behavior of the migration execution."""

    iceberg_config: Optional[IcebergConfig1] = Field(default=UNSET, alias="icebergConfig")
    """Optional. Configuration for migrating Iceberg tables to a BigLake Iceberg REST catalog."""

    report_path: Optional[str] = Field(default=UNSET, alias="reportPath")
    """Optional. The Cloud Storage path where the backfill / dry run report should be written. If not provided, the
    report will be generated in the service's artifacts bucket. Format: "gs://path/to/folder"
    """

    hive_config: Optional[HiveConfig1] = Field(default=UNSET, alias="hiveConfig")
    """Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a validation error will be
    thrown. If only one is provided, the service only migrates tables of that specific type. If both are provided, both
    Hive and Iceberg tables will be migrated.Configuration for migrating Hive tables to a BigLake Hive catalog."""


class BigLakeMetastoreMigrationConfig2Dict(TypedDict):
    dry_run: NotRequired[bool]
    backfill_status: NotRequired[BackfillStatus2Dict]
    conflict_policy: NotRequired[ConflictPolicyOrStr]
    mode: NotRequired[ModeOrStr]
    iceberg_config: NotRequired[IcebergConfig1Dict]
    report_path: NotRequired[str]
    hive_config: NotRequired[HiveConfig1Dict]
