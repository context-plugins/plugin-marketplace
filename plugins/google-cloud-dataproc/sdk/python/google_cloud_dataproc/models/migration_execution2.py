from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .big_lake_metastore_migration_config2 import BigLakeMetastoreMigrationConfig2, BigLakeMetastoreMigrationConfig2Dict
from .enums.phase import PhaseOrStr
from .enums.state14 import State14OrStr


class MigrationExecution2(SdkBaseModel):
    """Required. The configuration details for the migration."""

    name: Optional[str] = UNSET
    """Output only. The relative resource name of the migration execution, in the following form:
    projects/{project_number}/locations/{location_id}/services/{service_id}/migrationExecutions/{migration_execution_id}"""

    state: Optional[State14OrStr] = UNSET
    """Output only. The current state of the migration execution."""

    biglake_metastore_migration_config: Optional[BigLakeMetastoreMigrationConfig2] = Field(
        default=UNSET, alias="biglakeMetastoreMigrationConfig"
    )
    """Configuration information specific to migrating from Dataproc Metastore to BigLake Metastore."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Additional information about the current state of the migration execution."""

    phase: Optional[PhaseOrStr] = UNSET
    """Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when
    migrating away from it. The current phase of the migration execution."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the migration execution was started."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The time when the migration execution finished."""


class MigrationExecution2Dict(TypedDict):
    name: NotRequired[str]
    state: NotRequired[State14OrStr]
    biglake_metastore_migration_config: NotRequired[BigLakeMetastoreMigrationConfig2Dict]
    state_message: NotRequired[str]
    phase: NotRequired[PhaseOrStr]
    create_time: NotRequired[str]
    end_time: NotRequired[str]
