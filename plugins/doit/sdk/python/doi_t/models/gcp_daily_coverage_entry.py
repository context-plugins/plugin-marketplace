from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .money import Money, MoneyDict


class GcpDailyCoverageEntry(SdkBaseModel):
    """One day of CUD coverage breakdown. Money fields are wrapped objects (``{amount, currency}``). Which cost
    properties are present depends on the product line of the enclosing entry — ``compute`` rows carry every property
    except ``cloudSql``; ``cloud_sql`` rows carry only ``cloudSql`` and ``onDemand``. A property that belongs to the
    product line is present even when the amount is ``0.00``."""

    date: Date
    """Calendar day (UTC) for this coverage row in format YYYY-MM-DD."""

    compute_flexible: Optional[Money] = Field(default=UNSET, alias="computeFlexible")
    """Spend covered by Compute Flexible CUDs for the day."""

    cloud_run: Optional[Money] = Field(default=UNSET, alias="cloudRun")
    """Spend covered by Cloud Run CUDs for the day."""

    big_query: Optional[Money] = Field(default=UNSET, alias="bigQuery")
    """Spend covered by BigQuery CUDs for the day."""

    bigtable: Optional[Money] = UNSET
    """Spend covered by Bigtable CUDs for the day."""

    cloud_sql: Optional[Money] = Field(default=UNSET, alias="cloudSql")
    """Spend covered by Cloud SQL CUDs for the day."""

    cloud_firestore: Optional[Money] = Field(default=UNSET, alias="cloudFirestore")
    """Spend covered by Cloud Firestore CUDs for the day."""

    cloud_spanner: Optional[Money] = Field(default=UNSET, alias="cloudSpanner")
    """Spend covered by Cloud Spanner CUDs for the day."""

    memorystore_for_redis: Optional[Money] = Field(default=UNSET, alias="memorystoreForRedis")
    """Spend covered by Memorystore for Redis CUDs for the day."""

    alloy_db: Optional[Money] = Field(default=UNSET, alias="alloyDb")
    """Spend covered by AlloyDB CUDs for the day."""

    backup_for_oracle: Optional[Money] = Field(default=UNSET, alias="backupForOracle")
    """Spend covered by Google Cloud Backup and DR for Oracle CUDs for the day."""

    kafka: Optional[Money] = UNSET
    """Spend covered by Kafka CUDs for the day."""

    resource_based: Optional[Money] = Field(default=UNSET, alias="resourceBased")
    """Spend covered by resource-based (vCPU / memory) CUDs for the day."""

    on_demand: Optional[Money] = Field(default=UNSET, alias="onDemand")
    """On-demand spend not covered by any CUD for the day."""


class GcpDailyCoverageEntryDict(TypedDict):
    date: Date
    compute_flexible: NotRequired[MoneyDict]
    cloud_run: NotRequired[MoneyDict]
    big_query: NotRequired[MoneyDict]
    bigtable: NotRequired[MoneyDict]
    cloud_sql: NotRequired[MoneyDict]
    cloud_firestore: NotRequired[MoneyDict]
    cloud_spanner: NotRequired[MoneyDict]
    memorystore_for_redis: NotRequired[MoneyDict]
    alloy_db: NotRequired[MoneyDict]
    backup_for_oracle: NotRequired[MoneyDict]
    kafka: NotRequired[MoneyDict]
    resource_based: NotRequired[MoneyDict]
    on_demand: NotRequired[MoneyDict]
