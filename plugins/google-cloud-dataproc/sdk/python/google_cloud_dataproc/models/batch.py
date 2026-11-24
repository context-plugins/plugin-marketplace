from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state7 import State7OrStr
from .environment_config3 import EnvironmentConfig3, EnvironmentConfig3Dict
from .py_spark_batch1 import PySparkBatch1, PySparkBatch1Dict
from .py_spark_notebook_batch1 import PySparkNotebookBatch1, PySparkNotebookBatch1Dict
from .runtime_config3 import RuntimeConfig3, RuntimeConfig3Dict
from .runtime_info2 import RuntimeInfo2, RuntimeInfo2Dict
from .spark_batch2 import SparkBatch2, SparkBatch2Dict
from .spark_r_batch2 import SparkRBatch2, SparkRBatch2Dict
from .spark_sql_batch1 import SparkSqlBatch1, SparkSqlBatch1Dict
from .state_history import StateHistory, StateHistoryDict


class Batch(SdkBaseModel):
    """A representation of a batch workload in the service."""

    pyspark_notebook_batch: Optional[PySparkNotebookBatch1] = Field(default=UNSET, alias="pysparkNotebookBatch")
    """Optional. PySpark notebook batch config."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the batch was created."""

    environment_config: Optional[EnvironmentConfig3] = Field(default=UNSET, alias="environmentConfig")
    """Optional. Environment configuration for the batch execution."""

    spark_batch: Optional[SparkBatch2] = Field(default=UNSET, alias="sparkBatch")
    """Optional. Spark batch config."""

    pyspark_batch: Optional[PySparkBatch1] = Field(default=UNSET, alias="pysparkBatch")
    """Optional. PySpark batch config."""

    state_history: Optional[list[StateHistory]] = Field(default=UNSET, alias="stateHistory")
    """Output only. Historical state information for the batch."""

    spark_sql_batch: Optional[SparkSqlBatch1] = Field(default=UNSET, alias="sparkSqlBatch")
    """Optional. SparkSql batch config."""

    runtime_info: Optional[RuntimeInfo2] = Field(default=UNSET, alias="runtimeInfo")
    """Output only. Runtime information about batch execution."""

    operation: Optional[str] = UNSET
    """Output only. The resource name of the operation associated with this batch."""

    creator: Optional[str] = UNSET
    """Output only. The email address of the user who created the batch."""

    state_time: Optional[str] = Field(default=UNSET, alias="stateTime")
    """Output only. The time when the batch entered a current state."""

    name: Optional[str] = UNSET
    """Output only. The resource name of the batch."""

    spark_r_batch: Optional[SparkRBatch2] = Field(default=UNSET, alias="sparkRBatch")
    """Optional. SparkR batch config."""

    uuid: Optional[str] = UNSET
    """Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the
    batch."""

    state: Optional[State7OrStr] = UNSET
    """Output only. The state of the batch."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform
    to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63
    characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
    associated with a batch."""

    runtime_config: Optional[RuntimeConfig3] = Field(default=UNSET, alias="runtimeConfig")
    """Optional. Runtime configuration for the batch execution."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Batch state details, such as a failure description if the state is FAILED."""


class BatchDict(TypedDict):
    pyspark_notebook_batch: NotRequired[PySparkNotebookBatch1Dict]
    create_time: NotRequired[str]
    environment_config: NotRequired[EnvironmentConfig3Dict]
    spark_batch: NotRequired[SparkBatch2Dict]
    pyspark_batch: NotRequired[PySparkBatch1Dict]
    state_history: NotRequired[list[StateHistoryDict]]
    spark_sql_batch: NotRequired[SparkSqlBatch1Dict]
    runtime_info: NotRequired[RuntimeInfo2Dict]
    operation: NotRequired[str]
    creator: NotRequired[str]
    state_time: NotRequired[str]
    name: NotRequired[str]
    spark_r_batch: NotRequired[SparkRBatch2Dict]
    uuid: NotRequired[str]
    state: NotRequired[State7OrStr]
    labels: NotRequired[dict[str, str]]
    runtime_config: NotRequired[RuntimeConfig3Dict]
    state_message: NotRequired[str]
