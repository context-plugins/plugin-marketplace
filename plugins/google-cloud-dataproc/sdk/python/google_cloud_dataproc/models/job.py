from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .driver_scheduling_config2 import DriverSchedulingConfig2, DriverSchedulingConfig2Dict
from .flink_job2 import FlinkJob2, FlinkJob2Dict
from .hadoop_job1 import HadoopJob1, HadoopJob1Dict
from .hive_job1 import HiveJob1, HiveJob1Dict
from .job_placement2 import JobPlacement2, JobPlacement2Dict
from .job_reference2 import JobReference2, JobReference2Dict
from .job_scheduling1 import JobScheduling1, JobScheduling1Dict
from .job_status import JobStatus, JobStatusDict
from .job_status1 import JobStatus1, JobStatus1Dict
from .pig_job2 import PigJob2, PigJob2Dict
from .presto_job1 import PrestoJob1, PrestoJob1Dict
from .py_spark_job2 import PySparkJob2, PySparkJob2Dict
from .spark_job2 import SparkJob2, SparkJob2Dict
from .spark_r_job1 import SparkRJob1, SparkRJob1Dict
from .spark_sql_job1 import SparkSqlJob1, SparkSqlJob1Dict
from .trino_job2 import TrinoJob2, TrinoJob2Dict
from .yarn_application import YarnApplication, YarnApplicationDict


class Job(SdkBaseModel):
    """A Dataproc job resource."""

    status: Optional[JobStatus1] = UNSET
    """Output only. The job status. Additional application-specific status information might be contained in the
    type_job and yarn_applications fields."""

    pyspark_job: Optional[PySparkJob2] = Field(default=UNSET, alias="pysparkJob")
    """Optional. Job is a PySpark job."""

    hive_job: Optional[HiveJob1] = Field(default=UNSET, alias="hiveJob")
    """Optional. Job is a Hive job."""

    status_history: Optional[list[JobStatus]] = Field(default=UNSET, alias="statusHistory")
    """Output only. The previous job status."""

    reference: Optional[JobReference2] = UNSET
    """Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the
    job resource. If this property is not specified when a job is created, the server generates a job_id."""

    hadoop_job: Optional[HadoopJob1] = Field(default=UNSET, alias="hadoopJob")
    """Optional. Job is a Hadoop job."""

    yarn_applications: Optional[list[YarnApplication]] = Field(default=UNSET, alias="yarnApplications")
    """Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for
    testing purposes only. It might be changed before final release."""

    pig_job: Optional[PigJob2] = Field(default=UNSET, alias="pigJob")
    """Optional. Job is a Pig job."""

    scheduling: Optional[JobScheduling1] = UNSET
    """Optional. Job scheduling configuration."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to
    RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63
    characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
    associated with a job."""

    spark_r_job: Optional[SparkRJob1] = Field(default=UNSET, alias="sparkRJob")
    """Optional. Job is a SparkR job."""

    trino_job: Optional[TrinoJob2] = Field(default=UNSET, alias="trinoJob")
    """Optional. Job is a Trino job."""

    driver_output_resource_uri: Optional[str] = Field(default=UNSET, alias="driverOutputResourceUri")
    """Output only. A URI pointing to the location of the stdout of the job's driver program."""

    driver_scheduling_config: Optional[DriverSchedulingConfig2] = Field(default=UNSET, alias="driverSchedulingConfig")
    """Optional. Driver scheduling configuration."""

    done: Optional[bool] = UNSET
    """Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If
    true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled."""

    job_uuid: Optional[str] = Field(default=UNSET, alias="jobUuid")
    """Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a
    user-settable reference.job_id that might be reused over time."""

    driver_control_files_uri: Optional[str] = Field(default=UNSET, alias="driverControlFilesUri")
    """Output only. If present, the location of miscellaneous control files which can be used as part of job setup and
    handling. If not present, control files might be placed in the same location as driver_output_uri."""

    placement: Optional[JobPlacement2] = UNSET
    """Required. Job information, including how, when, and where to run the job."""

    spark_sql_job: Optional[SparkSqlJob1] = Field(default=UNSET, alias="sparkSqlJob")
    """Optional. Job is a SparkSql job."""

    spark_job: Optional[SparkJob2] = Field(default=UNSET, alias="sparkJob")
    """Optional. Job is a Spark job."""

    presto_job: Optional[PrestoJob1] = Field(default=UNSET, alias="prestoJob")
    """Optional. Job is a Presto job."""

    flink_job: Optional[FlinkJob2] = Field(default=UNSET, alias="flinkJob")
    """Optional. Job is a Flink job."""


class JobDict(TypedDict):
    status: NotRequired[JobStatus1Dict]
    pyspark_job: NotRequired[PySparkJob2Dict]
    hive_job: NotRequired[HiveJob1Dict]
    status_history: NotRequired[list[JobStatusDict]]
    reference: NotRequired[JobReference2Dict]
    hadoop_job: NotRequired[HadoopJob1Dict]
    yarn_applications: NotRequired[list[YarnApplicationDict]]
    pig_job: NotRequired[PigJob2Dict]
    scheduling: NotRequired[JobScheduling1Dict]
    labels: NotRequired[dict[str, str]]
    spark_r_job: NotRequired[SparkRJob1Dict]
    trino_job: NotRequired[TrinoJob2Dict]
    driver_output_resource_uri: NotRequired[str]
    driver_scheduling_config: NotRequired[DriverSchedulingConfig2Dict]
    done: NotRequired[bool]
    job_uuid: NotRequired[str]
    driver_control_files_uri: NotRequired[str]
    placement: NotRequired[JobPlacement2Dict]
    spark_sql_job: NotRequired[SparkSqlJob1Dict]
    spark_job: NotRequired[SparkJob2Dict]
    presto_job: NotRequired[PrestoJob1Dict]
    flink_job: NotRequired[FlinkJob2Dict]
