from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_summary import AppSummary, AppSummaryDict
from .application_environment_info import ApplicationEnvironmentInfo, ApplicationEnvironmentInfoDict
from .application_info import ApplicationInfo, ApplicationInfoDict
from .executor_stage_summary import ExecutorStageSummary, ExecutorStageSummaryDict
from .executor_summary import ExecutorSummary, ExecutorSummaryDict
from .job_data import JobData, JobDataDict
from .native_build_info_ui_data1 import NativeBuildInfoUiData1, NativeBuildInfoUiData1Dict
from .native_sql_execution_ui_data3 import NativeSqlExecutionUiData3, NativeSqlExecutionUiData3Dict
from .pool_data import PoolData, PoolDataDict
from .process_summary import ProcessSummary, ProcessSummaryDict
from .rdd_operation_graph import RddOperationGraph, RddOperationGraphDict
from .rdd_storage_info import RddStorageInfo, RddStorageInfoDict
from .resource_profile_info import ResourceProfileInfo, ResourceProfileInfoDict
from .spark_connect_execution_info1 import SparkConnectExecutionInfo1, SparkConnectExecutionInfo1Dict
from .spark_connect_session_info1 import SparkConnectSessionInfo1, SparkConnectSessionInfo1Dict
from .spark_plan_graph import SparkPlanGraph, SparkPlanGraphDict
from .speculation_stage_summary import SpeculationStageSummary, SpeculationStageSummaryDict
from .sql_execution_ui_data import SqlExecutionUiData, SqlExecutionUiDataDict
from .stage_data import StageData, StageDataDict
from .stream_block_data import StreamBlockData, StreamBlockDataDict
from .streaming_query_data import StreamingQueryData, StreamingQueryDataDict
from .streaming_query_progress import StreamingQueryProgress, StreamingQueryProgressDict
from .task_data import TaskData, TaskDataDict


class SparkWrapperObject(SdkBaseModel):
    """Outer message that contains the data obtained from spark listener, packaged with information that is required to
    process it."""

    app_summary: Optional[AppSummary] = Field(default=UNSET, alias="appSummary")
    rdd_operation_graph: Optional[RddOperationGraph] = Field(default=UNSET, alias="rddOperationGraph")
    """Graph representing RDD dependencies. Consists of edges and a root cluster."""

    executor_summary: Optional[ExecutorSummary] = Field(default=UNSET, alias="executorSummary")
    """Details about executors used by the application."""

    spark_connect_execution_info: Optional[SparkConnectExecutionInfo1] = Field(
        default=UNSET, alias="sparkConnectExecutionInfo"
    )
    """Spark Connect Execution Info"""

    native_sql_execution_ui_data: Optional[NativeSqlExecutionUiData3] = Field(
        default=UNSET, alias="nativeSqlExecutionUiData"
    )
    """Native SQL Execution Info"""

    application_environment_info: Optional[ApplicationEnvironmentInfo] = Field(
        default=UNSET, alias="applicationEnvironmentInfo"
    )
    """Details about the Environment that the application is running in."""

    stream_block_data: Optional[StreamBlockData] = Field(default=UNSET, alias="streamBlockData")
    """Stream Block Data."""

    streaming_query_progress: Optional[StreamingQueryProgress] = Field(default=UNSET, alias="streamingQueryProgress")
    speculation_stage_summary: Optional[SpeculationStageSummary] = Field(default=UNSET, alias="speculationStageSummary")
    """Details of the speculation task when speculative execution is enabled."""

    process_summary: Optional[ProcessSummary] = Field(default=UNSET, alias="processSummary")
    """Process Summary"""

    spark_connect_session_info: Optional[SparkConnectSessionInfo1] = Field(
        default=UNSET, alias="sparkConnectSessionInfo"
    )
    """Spark Connect Session Info"""

    native_build_info_ui_data: Optional[NativeBuildInfoUiData1] = Field(default=UNSET, alias="nativeBuildInfoUiData")
    """Native Build Info"""

    executor_stage_summary: Optional[ExecutorStageSummary] = Field(default=UNSET, alias="executorStageSummary")
    """Executor resources consumed by a stage."""

    job_data: Optional[JobData] = Field(default=UNSET, alias="jobData")
    """Data corresponding to a spark job."""

    stage_data: Optional[StageData] = Field(default=UNSET, alias="stageData")
    """Data corresponding to a stage."""

    rdd_storage_info: Optional[RddStorageInfo] = Field(default=UNSET, alias="rddStorageInfo")
    """Overall data about RDD storage."""

    spark_plan_graph: Optional[SparkPlanGraph] = Field(default=UNSET, alias="sparkPlanGraph")
    """A graph used for storing information of an executionPlan of DataFrame."""

    task_data: Optional[TaskData] = Field(default=UNSET, alias="taskData")
    """Data corresponding to tasks created by spark."""

    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    """Application Id created by Spark."""

    application_info: Optional[ApplicationInfo] = Field(default=UNSET, alias="applicationInfo")
    """High level information corresponding to an application."""

    sql_execution_ui_data: Optional[SqlExecutionUiData] = Field(default=UNSET, alias="sqlExecutionUiData")
    """SQL Execution Data"""

    streaming_query_data: Optional[StreamingQueryData] = Field(default=UNSET, alias="streamingQueryData")
    """Streaming"""

    resource_profile_info: Optional[ResourceProfileInfo] = Field(default=UNSET, alias="resourceProfileInfo")
    """Resource profile that contains information about all the resources required by executors and tasks."""

    event_timestamp: Optional[str] = Field(default=UNSET, alias="eventTimestamp")
    """VM Timestamp associated with the data object."""

    pool_data: Optional[PoolData] = Field(default=UNSET, alias="poolData")
    """Pool Data"""


class SparkWrapperObjectDict(TypedDict):
    app_summary: NotRequired[AppSummaryDict]
    rdd_operation_graph: NotRequired[RddOperationGraphDict]
    executor_summary: NotRequired[ExecutorSummaryDict]
    spark_connect_execution_info: NotRequired[SparkConnectExecutionInfo1Dict]
    native_sql_execution_ui_data: NotRequired[NativeSqlExecutionUiData3Dict]
    application_environment_info: NotRequired[ApplicationEnvironmentInfoDict]
    stream_block_data: NotRequired[StreamBlockDataDict]
    streaming_query_progress: NotRequired[StreamingQueryProgressDict]
    speculation_stage_summary: NotRequired[SpeculationStageSummaryDict]
    process_summary: NotRequired[ProcessSummaryDict]
    spark_connect_session_info: NotRequired[SparkConnectSessionInfo1Dict]
    native_build_info_ui_data: NotRequired[NativeBuildInfoUiData1Dict]
    executor_stage_summary: NotRequired[ExecutorStageSummaryDict]
    job_data: NotRequired[JobDataDict]
    stage_data: NotRequired[StageDataDict]
    rdd_storage_info: NotRequired[RddStorageInfoDict]
    spark_plan_graph: NotRequired[SparkPlanGraphDict]
    task_data: NotRequired[TaskDataDict]
    application_id: NotRequired[str]
    application_info: NotRequired[ApplicationInfoDict]
    sql_execution_ui_data: NotRequired[SqlExecutionUiDataDict]
    streaming_query_data: NotRequired[StreamingQueryDataDict]
    resource_profile_info: NotRequired[ResourceProfileInfoDict]
    event_timestamp: NotRequired[str]
    pool_data: NotRequired[PoolDataDict]
