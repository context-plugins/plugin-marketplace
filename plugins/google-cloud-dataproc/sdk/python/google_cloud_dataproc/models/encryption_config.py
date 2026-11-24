from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionConfig(SdkBaseModel):
    """Encryption settings for the cluster."""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Optional. The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption. See Use
    CMEK with cluster data
    (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data)
    for more information.When this key resource name is provided, the following job arguments of the following job types
    submitted to the cluster are encrypted using CMEK: FlinkJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries"""

    gce_pd_kms_key_name: Optional[str] = Field(default=UNSET, alias="gcePdKmsKeyName")
    """Optional. The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster.
    See Use CMEK with cluster data
    (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data)
    for more information."""


class EncryptionConfigDict(TypedDict):
    kms_key: NotRequired[str]
    gce_pd_kms_key_name: NotRequired[str]
