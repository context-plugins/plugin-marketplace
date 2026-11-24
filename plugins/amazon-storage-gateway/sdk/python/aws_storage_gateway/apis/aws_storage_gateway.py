from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.activate_gateway2_error import ActivateGateway2ErrorBody, activate_gateway2_error_mapper
from ..errors.add_cache_error import AddCacheErrorBody, add_cache_error_mapper
from ..errors.add_tags_to_resource_error import AddTagsToResourceErrorBody, add_tags_to_resource_error_mapper
from ..errors.add_upload_buffer_error import AddUploadBufferErrorBody, add_upload_buffer_error_mapper
from ..errors.add_working_storage_error import AddWorkingStorageErrorBody, add_working_storage_error_mapper
from ..errors.assign_tape_pool_error import AssignTapePoolErrorBody, assign_tape_pool_error_mapper
from ..errors.associate_file_system_error import AssociateFileSystemErrorBody, associate_file_system_error_mapper
from ..errors.attach_volume_error import AttachVolumeErrorBody, attach_volume_error_mapper
from ..errors.cancel_archival_error import CancelArchivalErrorBody, cancel_archival_error_mapper
from ..errors.cancel_retrieval_error import CancelRetrievalErrorBody, cancel_retrieval_error_mapper
from ..errors.create_cachedi_scsi_volume_error import (
    CreateCachediScsiVolumeErrorBody,
    create_cachedi_scsi_volume_error_mapper,
)
from ..errors.create_nfs_file_share2_error import CreateNfsFileShare2ErrorBody, create_nfs_file_share2_error_mapper
from ..errors.create_smb_file_share_error import CreateSmbFileShareErrorBody, create_smb_file_share_error_mapper
from ..errors.create_snapshot_error import CreateSnapshotErrorBody, create_snapshot_error_mapper
from ..errors.create_snapshot_from_volume_recovery_point_error import (
    CreateSnapshotFromVolumeRecoveryPointErrorBody,
    create_snapshot_from_volume_recovery_point_error_mapper,
)
from ..errors.create_storedi_scsi_volume_error import (
    CreateStorediScsiVolumeErrorBody,
    create_storedi_scsi_volume_error_mapper,
)
from ..errors.create_tape_pool_error import CreateTapePoolErrorBody, create_tape_pool_error_mapper
from ..errors.create_tape_with_barcode_error import (
    CreateTapeWithBarcodeErrorBody,
    create_tape_with_barcode_error_mapper,
)
from ..errors.create_tapes_error import CreateTapesErrorBody, create_tapes_error_mapper
from ..errors.delete_automatic_tape_creation_policy_error import (
    DeleteAutomaticTapeCreationPolicyErrorBody,
    delete_automatic_tape_creation_policy_error_mapper,
)
from ..errors.delete_bandwidth_rate_limit_error import (
    DeleteBandwidthRateLimitErrorBody,
    delete_bandwidth_rate_limit_error_mapper,
)
from ..errors.delete_chap_credentials_error import DeleteChapCredentialsErrorBody, delete_chap_credentials_error_mapper
from ..errors.delete_file_share_error import DeleteFileShareErrorBody, delete_file_share_error_mapper
from ..errors.delete_gateway_error import DeleteGatewayErrorBody, delete_gateway_error_mapper
from ..errors.delete_snapshot_schedule_error import (
    DeleteSnapshotScheduleErrorBody,
    delete_snapshot_schedule_error_mapper,
)
from ..errors.delete_tape_archive_error import DeleteTapeArchiveErrorBody, delete_tape_archive_error_mapper
from ..errors.delete_tape_error import DeleteTapeErrorBody, delete_tape_error_mapper
from ..errors.delete_tape_pool_error import DeleteTapePoolErrorBody, delete_tape_pool_error_mapper
from ..errors.delete_volume_error import DeleteVolumeErrorBody, delete_volume_error_mapper
from ..errors.describe_availability_monitor_test_error import (
    DescribeAvailabilityMonitorTestErrorBody,
    describe_availability_monitor_test_error_mapper,
)
from ..errors.describe_bandwidth_rate_limit_error import (
    DescribeBandwidthRateLimitErrorBody,
    describe_bandwidth_rate_limit_error_mapper,
)
from ..errors.describe_bandwidth_rate_limit_schedule_error import (
    DescribeBandwidthRateLimitScheduleErrorBody,
    describe_bandwidth_rate_limit_schedule_error_mapper,
)
from ..errors.describe_cache_error import DescribeCacheErrorBody, describe_cache_error_mapper
from ..errors.describe_cachedi_scsi_volumes_error import (
    DescribeCachediScsiVolumesErrorBody,
    describe_cachedi_scsi_volumes_error_mapper,
)
from ..errors.describe_chap_credentials_error import (
    DescribeChapCredentialsErrorBody,
    describe_chap_credentials_error_mapper,
)
from ..errors.describe_file_system_associations_error import (
    DescribeFileSystemAssociationsErrorBody,
    describe_file_system_associations_error_mapper,
)
from ..errors.describe_gateway_information2_error import (
    DescribeGatewayInformation2ErrorBody,
    describe_gateway_information2_error_mapper,
)
from ..errors.describe_maintenance_start_time_error import (
    DescribeMaintenanceStartTimeErrorBody,
    describe_maintenance_start_time_error_mapper,
)
from ..errors.describe_nfs_file_shares_error import (
    DescribeNfsFileSharesErrorBody,
    describe_nfs_file_shares_error_mapper,
)
from ..errors.describe_smb_file_shares_error import (
    DescribeSmbFileSharesErrorBody,
    describe_smb_file_shares_error_mapper,
)
from ..errors.describe_smb_settings_error import DescribeSmbSettingsErrorBody, describe_smb_settings_error_mapper
from ..errors.describe_snapshot_schedule_error import (
    DescribeSnapshotScheduleErrorBody,
    describe_snapshot_schedule_error_mapper,
)
from ..errors.describe_storedi_scsi_volumes_error import (
    DescribeStorediScsiVolumesErrorBody,
    describe_storedi_scsi_volumes_error_mapper,
)
from ..errors.describe_tape_archives_error import DescribeTapeArchivesErrorBody, describe_tape_archives_error_mapper
from ..errors.describe_tape_recovery_points_error import (
    DescribeTapeRecoveryPointsErrorBody,
    describe_tape_recovery_points_error_mapper,
)
from ..errors.describe_tapes_error import DescribeTapesErrorBody, describe_tapes_error_mapper
from ..errors.describe_upload_buffer_error import DescribeUploadBufferErrorBody, describe_upload_buffer_error_mapper
from ..errors.describe_vtl_devices_error import DescribeVtlDevicesErrorBody, describe_vtl_devices_error_mapper
from ..errors.describe_working_storage_error import (
    DescribeWorkingStorageErrorBody,
    describe_working_storage_error_mapper,
)
from ..errors.detach_volume_error import DetachVolumeErrorBody, detach_volume_error_mapper
from ..errors.disable_gateway_error import DisableGatewayErrorBody, disable_gateway_error_mapper
from ..errors.disassociate_file_system_error import (
    DisassociateFileSystemErrorBody,
    disassociate_file_system_error_mapper,
)
from ..errors.join_domain_error import JoinDomainErrorBody, join_domain_error_mapper
from ..errors.list_automatic_tape_creation_policies_error import (
    ListAutomaticTapeCreationPoliciesErrorBody,
    list_automatic_tape_creation_policies_error_mapper,
)
from ..errors.list_file_shares_error import ListFileSharesErrorBody, list_file_shares_error_mapper
from ..errors.list_file_system_associations_error import (
    ListFileSystemAssociationsErrorBody,
    list_file_system_associations_error_mapper,
)
from ..errors.list_gateways2_error import ListGateways2ErrorBody, list_gateways2_error_mapper
from ..errors.list_local_disks_error import ListLocalDisksErrorBody, list_local_disks_error_mapper
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.list_tape_pools_error import ListTapePoolsErrorBody, list_tape_pools_error_mapper
from ..errors.list_tapes_error import ListTapesErrorBody, list_tapes_error_mapper
from ..errors.list_volume_initiators_error import ListVolumeInitiatorsErrorBody, list_volume_initiators_error_mapper
from ..errors.list_volume_recovery_points_error import (
    ListVolumeRecoveryPointsErrorBody,
    list_volume_recovery_points_error_mapper,
)
from ..errors.list_volumes2_error import ListVolumes2ErrorBody, list_volumes2_error_mapper
from ..errors.notify_when_uploaded_error import NotifyWhenUploadedErrorBody, notify_when_uploaded_error_mapper
from ..errors.refresh_cache_error import RefreshCacheErrorBody, refresh_cache_error_mapper
from ..errors.remove_tags_from_resource_error import (
    RemoveTagsFromResourceErrorBody,
    remove_tags_from_resource_error_mapper,
)
from ..errors.reset_cache_error import ResetCacheErrorBody, reset_cache_error_mapper
from ..errors.retrieve_tape_archive_error import RetrieveTapeArchiveErrorBody, retrieve_tape_archive_error_mapper
from ..errors.retrieve_tape_recovery_point_error import (
    RetrieveTapeRecoveryPointErrorBody,
    retrieve_tape_recovery_point_error_mapper,
)
from ..errors.set_local_console_password_error import (
    SetLocalConsolePasswordErrorBody,
    set_local_console_password_error_mapper,
)
from ..errors.set_smb_guest_password_error import SetSmbGuestPasswordErrorBody, set_smb_guest_password_error_mapper
from ..errors.shutdown_gateway_error import ShutdownGatewayErrorBody, shutdown_gateway_error_mapper
from ..errors.start_availability_monitor_test_error import (
    StartAvailabilityMonitorTestErrorBody,
    start_availability_monitor_test_error_mapper,
)
from ..errors.start_gateway_error import StartGatewayErrorBody, start_gateway_error_mapper
from ..errors.update_automatic_tape_creation_policy_error import (
    UpdateAutomaticTapeCreationPolicyErrorBody,
    update_automatic_tape_creation_policy_error_mapper,
)
from ..errors.update_bandwidth_rate_limit_error import (
    UpdateBandwidthRateLimitErrorBody,
    update_bandwidth_rate_limit_error_mapper,
)
from ..errors.update_bandwidth_rate_limit_schedule_error import (
    UpdateBandwidthRateLimitScheduleErrorBody,
    update_bandwidth_rate_limit_schedule_error_mapper,
)
from ..errors.update_chap_credentials_error import UpdateChapCredentialsErrorBody, update_chap_credentials_error_mapper
from ..errors.update_file_system_association_error import (
    UpdateFileSystemAssociationErrorBody,
    update_file_system_association_error_mapper,
)
from ..errors.update_gateway_information_error import (
    UpdateGatewayInformationErrorBody,
    update_gateway_information_error_mapper,
)
from ..errors.update_gateway_software_now_error import (
    UpdateGatewaySoftwareNowErrorBody,
    update_gateway_software_now_error_mapper,
)
from ..errors.update_maintenance_start_time_error import (
    UpdateMaintenanceStartTimeErrorBody,
    update_maintenance_start_time_error_mapper,
)
from ..errors.update_nfs_file_share_error import UpdateNfsFileShareErrorBody, update_nfs_file_share_error_mapper
from ..errors.update_smb_file_share_error import UpdateSmbFileShareErrorBody, update_smb_file_share_error_mapper
from ..errors.update_smb_file_share_visibility_error import (
    UpdateSmbFileShareVisibilityErrorBody,
    update_smb_file_share_visibility_error_mapper,
)
from ..errors.update_smb_local_groups_error import UpdateSmbLocalGroupsErrorBody, update_smb_local_groups_error_mapper
from ..errors.update_smb_security_strategy_error import (
    UpdateSmbSecurityStrategyErrorBody,
    update_smb_security_strategy_error_mapper,
)
from ..errors.update_snapshot_schedule_error import (
    UpdateSnapshotScheduleErrorBody,
    update_snapshot_schedule_error_mapper,
)
from ..errors.update_vtl_device_type_error import UpdateVtlDeviceTypeErrorBody, update_vtl_device_type_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target1_aws_storage_gateway_aws_storage_gateway_api import (
    XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
)
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target2_aws_storage_gateway_aws_storage_gateway_api import (
    XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr,
)
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target3_aws_storage_gateway_aws_storage_gateway_api import (
    XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr,
)
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target4_aws_storage_gateway_aws_storage_gateway_api import (
    XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr,
)
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target10 import XAmzTarget10OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..models.enums.x_amz_target26 import XAmzTarget26OrStr
from ..models.enums.x_amz_target27 import XAmzTarget27OrStr
from ..models.enums.x_amz_target28 import XAmzTarget28OrStr
from ..models.enums.x_amz_target29 import XAmzTarget29OrStr
from ..models.enums.x_amz_target30 import XAmzTarget30OrStr
from ..models.enums.x_amz_target31 import XAmzTarget31OrStr
from ..models.enums.x_amz_target32 import XAmzTarget32OrStr
from ..models.enums.x_amz_target33 import XAmzTarget33OrStr
from ..models.enums.x_amz_target34 import XAmzTarget34OrStr
from ..models.enums.x_amz_target35 import XAmzTarget35OrStr
from ..models.enums.x_amz_target36 import XAmzTarget36OrStr
from ..models.enums.x_amz_target37 import XAmzTarget37OrStr
from ..models.enums.x_amz_target38 import XAmzTarget38OrStr
from ..models.enums.x_amz_target39 import XAmzTarget39OrStr
from ..models.enums.x_amz_target40 import XAmzTarget40OrStr
from ..models.enums.x_amz_target41 import XAmzTarget41OrStr
from ..models.enums.x_amz_target42 import XAmzTarget42OrStr
from ..models.enums.x_amz_target43 import XAmzTarget43OrStr
from ..models.enums.x_amz_target44 import XAmzTarget44OrStr
from ..models.enums.x_amz_target45 import XAmzTarget45OrStr
from ..models.enums.x_amz_target46 import XAmzTarget46OrStr
from ..models.enums.x_amz_target47 import XAmzTarget47OrStr
from ..models.enums.x_amz_target48 import XAmzTarget48OrStr
from ..models.enums.x_amz_target49 import XAmzTarget49OrStr
from ..models.enums.x_amz_target50 import XAmzTarget50OrStr
from ..models.enums.x_amz_target51 import XAmzTarget51OrStr
from ..models.enums.x_amz_target52 import XAmzTarget52OrStr
from ..models.enums.x_amz_target53 import XAmzTarget53OrStr
from ..models.enums.x_amz_target54 import XAmzTarget54OrStr
from ..models.enums.x_amz_target55 import XAmzTarget55OrStr
from ..models.enums.x_amz_target56 import XAmzTarget56OrStr
from ..models.enums.x_amz_target57 import XAmzTarget57OrStr
from ..models.enums.x_amz_target58 import XAmzTarget58OrStr
from ..models.enums.x_amz_target59 import XAmzTarget59OrStr
from ..models.enums.x_amz_target60 import XAmzTarget60OrStr
from ..models.enums.x_amz_target61 import XAmzTarget61OrStr
from ..models.enums.x_amz_target62 import XAmzTarget62OrStr
from ..models.enums.x_amz_target63 import XAmzTarget63OrStr
from ..models.enums.x_amz_target64 import XAmzTarget64OrStr
from ..models.enums.x_amz_target65 import XAmzTarget65OrStr
from ..models.enums.x_amz_target66 import XAmzTarget66OrStr
from ..models.enums.x_amz_target67 import XAmzTarget67OrStr
from ..models.enums.x_amz_target68 import XAmzTarget68OrStr
from ..models.enums.x_amz_target69 import XAmzTarget69OrStr
from ..models.enums.x_amz_target70 import XAmzTarget70OrStr
from ..models.enums.x_amz_target71 import XAmzTarget71OrStr
from ..models.enums.x_amz_target72 import XAmzTarget72OrStr
from ..models.enums.x_amz_target73 import XAmzTarget73OrStr
from ..models.enums.x_amz_target74 import XAmzTarget74OrStr
from ..models.enums.x_amz_target75 import XAmzTarget75OrStr
from ..models.enums.x_amz_target76 import XAmzTarget76OrStr
from ..models.enums.x_amz_target77 import XAmzTarget77OrStr
from ..models.enums.x_amz_target78 import XAmzTarget78OrStr
from ..models.enums.x_amz_target79 import XAmzTarget79OrStr
from ..models.enums.x_amz_target80 import XAmzTarget80OrStr
from ..models.enums.x_amz_target81 import XAmzTarget81OrStr
from ..models.enums.x_amz_target82 import XAmzTarget82OrStr
from ..models.enums.x_amz_target83 import XAmzTarget83OrStr
from ..models.enums.x_amz_target84 import XAmzTarget84OrStr
from ..models.enums.x_amz_target85 import XAmzTarget85OrStr
from ..server.server import Server


class AwsStorageGateway:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStorageGatewayWithRawResponse(client, server, auth)

    def activate_gateway2(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.activate_gateway2(x_amz_target, request_options=request_options))

    def add_cache(self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the
        cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you
        specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you
        want to configure as cache.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_cache(x_amz_target, request_options=request_options))

    def add_tags_to_resource(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use
        to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or
        team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage
        Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File
        System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
        that are recovered to a new gateway maintain their tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_tags_to_resource(x_amz_target, request_options=request_options))

    def add_upload_buffer(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is
        supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway
        Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to
        configure as upload buffer.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_upload_buffer(x_amz_target, request_options=request_options))

    def add_working_storage(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Configures one or more gateway local disks as working storage for a gateway. This operation is only supported
        in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use
        AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the
        gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you
        want to configure as working storage.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_working_storage(x_amz_target, request_options=request_options))

    def assign_tape_pool(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.assign_tape_pool(x_amz_target, request_options=request_options))

    def associate_file_system(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the
        file shares on the Amazon FSx file system are available for access through the gateway. This operation only
        supports the FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.associate_file_system(x_amz_target, request_options=request_options))

    def attach_volume(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and
        attaching a volume enables you to recover your data from one gateway to a different gateway without creating a
        snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an
        Amazon EC2 instance.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.attach_volume(x_amz_target, request_options=request_options))

    def cancel_archival(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
        This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cancel_archival(x_amz_target, request_options=request_options))

    def cancel_retrieval(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval
        process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape
        gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cancel_retrieval(x_amz_target, request_options=request_options))

    def create_cachedi_scsi_volume(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached
        volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use
        the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of
        the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client
        token. In response, the gateway creates the volume and returns information about it. This information includes
        the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to
        the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this
        cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes
        value must be equal to or larger than the size of the copied volume, in bytes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_cachedi_scsi_volume(x_amz_target, request_options=request_options))

    def create_nfs_file_share2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_nfs_file_share2(x_amz_target, request_options=request_options))

    def create_smb_file_share(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon
        Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_smb_file_share(x_amz_target, request_options=request_options))

    def create_snapshot(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of
        your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an
        Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your
        gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more
        information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by
        providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage
        Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway
        console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only
        supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2
        API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API
        Reference. Volume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ServiceUnavailableError ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_snapshot(x_amz_target, request_options=request_options))

    def create_snapshot_from_volume_recovery_point(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the
        cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is
        consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume
        gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the
        volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When
        the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage
        Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a
        snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the
        Amazon Elastic Compute Cloud API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ServiceUnavailableError ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_snapshot_from_volume_recovery_point(
                x_amz_target, request_options=request_options
            ),
        )

    def create_storedi_scsi_volume(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.
        The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the
        disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty
        gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and
        the disk information on which you are creating the volume. In response, the gateway creates the volume and
        returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN
        that initiators can use to connect to the volume target.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_storedi_scsi_volume(x_amz_target, request_options=request_options))

    def create_tape_pool(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are
        archived in the custom pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_tape_pool(x_amz_target, request_options=request_options))

    def create_tape_with_barcode(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the
        tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes
        used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be
        allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage
        to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_tape_with_barcode(x_amz_target, request_options=request_options))

    def create_tapes(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This
        operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you
        can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_tapes(x_amz_target, request_options=request_options))

    def delete_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be
        created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_automatic_tape_creation_policy(x_amz_target, request_options=request_options)
        )

    def delete_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate
        limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To
        specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This
        operation is supported only for the stored volume, cached volume, and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    def delete_chap_credentials(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and
        initiator pair. This operation is supported in volume and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_chap_credentials(x_amz_target, request_options=request_options))

    def delete_file_share(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_file_share(x_amz_target, request_options=request_options))

    def delete_gateway(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in
        your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM)
        from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the
        gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After
        you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges
        after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be
        billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon
        EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using
        the Amazon EC2 console. For more information, see the Storage Gateway detail page.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_gateway(x_amz_target, request_options=request_options))

    def delete_snapshot_schedule(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc
        basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing
        up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource
        Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you
        must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud
        API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_snapshot_schedule(x_amz_target, request_options=request_options))

    def delete_tape(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_tape(x_amz_target, request_options=request_options))

    def delete_tape_archive(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the
        tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_tape_archive(x_amz_target, request_options=request_options))

    def delete_tape_pool(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if
        there are no automatic tape creation policies that reference the custom tape pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_tape_pool(x_amz_target, request_options=request_options))

    def delete_volume(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or
        CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For
        stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse
        the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI
        connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can
        use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and
        check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API
        Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to
        delete.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_volume(x_amz_target, request_options=request_options))

    def describe_availability_monitor_test(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the most recent high availability monitoring test that was performed on the host in
        a cluster. If a test isn't performed, the status and start time in the response would be null.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_availability_monitor_test(x_amz_target, request_options=request_options)
        )

    def describe_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no
        bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and
        tape gateway types. To describe bandwidth rate limits for S3 file gateways, use
        DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit
        is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response
        body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    def describe_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have
        bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported
        only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This
        operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule
        consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time
        on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or
        both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an
        ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit
        schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway
        to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_bandwidth_rate_limit_schedule(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_cache(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the cache of a gateway. This operation is only supported in the cached volume,
        tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the
        amount of cache allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_cache(x_amz_target, request_options=request_options))

    def describe_cachedi_scsi_volumes(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of the gateway volumes specified in the request. This operation is only supported in
        the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the
        response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_cachedi_scsi_volumes(x_amz_target, request_options=request_options)
        )

    def describe_chap_credentials(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a
        specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape
        gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_chap_credentials(x_amz_target, request_options=request_options))

    def describe_file_system_associations(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the file system association information. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_file_system_associations(x_amz_target, request_options=request_options)
        )

    def describe_gateway_information2(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_gateway_information2(x_amz_target, request_options=request_options)
        )

    def describe_maintenance_start_time(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence,
        specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for
        the gateway's time zone.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_maintenance_start_time(x_amz_target, request_options=request_options)
        )

    def describe_nfs_file_shares(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_nfs_file_shares(x_amz_target, request_options=request_options))

    def describe_smb_file_shares(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_smb_file_shares(x_amz_target, request_options=request_options))

    def describe_smb_settings(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is
        only supported for file gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_smb_settings(x_amz_target, request_options=request_options))

    def describe_snapshot_schedule(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes
        intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the
        cached volume and stored volume types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_snapshot_schedule(x_amz_target, request_options=request_options))

    def describe_storedi_scsi_volumes(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the
        request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume
        ARNs. This operation is only supported in stored volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_storedi_scsi_volumes(x_amz_target, request_options=request_options)
        )

    def describe_tape_archives(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only
        supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a
        description of all virtual tapes found in the VTS associated with your account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_tape_archives(x_amz_target, request_options=request_options))

    def describe_tape_recovery_points(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery
        point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your
        gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is
        only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_tape_recovery_points(x_amz_target, request_options=request_options)
        )

    def describe_tapes(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If
        TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This
        operation is only supported for the tape gateway type. The operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit
        the number of tapes in the response. If the number of tapes returned in the response is truncated, the response
        includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of
        tapes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_tapes(x_amz_target, request_options=request_options))

    def describe_upload_buffer(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the upload buffer of a gateway. This operation is supported for the stored volume,
        cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer
        space, and it includes the amount of upload buffer space allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_upload_buffer(x_amz_target, request_options=request_options))

    def describe_vtl_devices(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response,
        Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_vtl_devices(x_amz_target, request_options=request_options))

    def describe_working_storage(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the working storage of a gateway. This operation is only supported in the stored
        volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use
        DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs
        that are configured as working storage, and it includes the amount of working storage allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_working_storage(x_amz_target, request_options=request_options))

    def detach_volume(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.
        Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway
        without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a
        gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detach_volume(x_amz_target, request_options=request_options))

    def disable_gateway(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is
        damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway
        that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a
        gateway is disabled, it cannot be enabled.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disable_gateway(x_amz_target, request_options=request_options))

    def disassociate_file_system(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process
        finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the
        FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disassociate_file_system(x_amz_target, request_options=request_options))

    def join_domain(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.join_domain(x_amz_target, request_options=request_options))

    def list_automatic_tape_creation_policies(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies
        for the gateway, it returns an empty list. This operation is only supported for tape gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_automatic_tape_creation_policies(x_amz_target, request_options=request_options)
        )

    def list_file_shares(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the
        calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_file_shares(x_amz_target, request_options=request_options))

    def list_file_system_associations(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system
        association. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_file_system_associations(x_amz_target, request_options=request_options)
        )

    def list_gateways2(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_gateways2(x_amz_target, request_options=request_options))

    def list_local_disks(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon
        Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks,
        specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
        The response includes a DiskStatus field. This field can have a value of present (the disk is available to use),
        missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that
        has incorrect metadata or the disk content is corrupted).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_local_disks(x_amz_target, request_options=request_options))

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the tags that have been added to the specified resource. This operation is supported in storage
        gateways of all types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def list_tape_pools(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool
        Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape
        pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit
        the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape
        pools.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tape_pools(x_amz_target, request_options=request_options))

    def list_tapes(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the
        tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the
        operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to
        limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of
        tapes. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tapes(x_amz_target, request_options=request_options))

    def list_volume_initiators(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a
        volume is being used or not. This operation is only supported in the cached volume and stored volume gateway
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_volume_initiators(x_amz_target, request_options=request_options))

    def list_volume_recovery_points(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the recovery points for a specified gateway. This operation is only supported in the cached volume
        gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all
        data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a
        source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_volume_recovery_points(x_amz_target, request_options=request_options)
        )

    def list_volumes2(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_volumes2(x_amz_target, request_options=request_options))

    def notify_when_uploaded(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.notify_when_uploaded(x_amz_target, request_options=request_options))

    def refresh_cache(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.refresh_cache(x_amz_target, request_options=request_options))

    def remove_tags_from_resource(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from the specified resource. This operation is supported in storage gateways of all
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.remove_tags_from_resource(x_amz_target, request_options=request_options))

    def reset_cache(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as
        cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual
        tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When
        a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache
        disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting
        contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks,
        there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk
        for your gateway to function properly.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reset_cache(x_amz_target, request_options=request_options))

    def retrieve_tape_archive(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.retrieve_tape_archive(x_amz_target, request_options=request_options))

    def retrieve_tape_recovery_point(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_tape_recovery_point(x_amz_target, request_options=request_options)
        )

    def set_local_console_password(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Sets the password for your VM local console. When you log in to the local console for the first time, you log
        in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the
        default password to set a new password.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_local_console_password(x_amz_target, request_options=request_options))

    def set_smb_guest_password(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method
        for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_smb_guest_password(x_amz_target, request_options=request_options))

    def shutdown_gateway(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.shutdown_gateway(x_amz_target, request_options=request_options))

    def start_availability_monitor_test(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Start a test that verifies that the specified gateway is configured for High Availability monitoring in your
        host environment. This request only initiates the test and that a successful response only indicates that the
        test was started. It doesn't indicate that the test passed. For the status of the test, invoke the
        DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief
        period.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.start_availability_monitor_test(x_amz_target, request_options=request_options)
        )

    def start_gateway(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then
        make other API calls, your applications can read from or write to the gateway's storage volumes and you will be
        able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately.
        However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and
        check the status before making any additional API calls. For more information, see ActivateGateway. To specify
        which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_gateway(x_amz_target, request_options=request_options))

    def update_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of
        automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape
        creation policy. A gateway can have only one automatic tape creation policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_automatic_tape_creation_policy(x_amz_target, request_options=request_options)
        )

    def update_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate
        limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.
        This operation is supported only for the stored volume, cached volume, and tape gateway types. To update
        bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's
        bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its
        bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update,
        use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    def update_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth
        rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a
        gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3
        file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
        limits.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_bandwidth_rate_limit_schedule(x_amz_target, request_options=request_options)
        )

    def update_chap_credentials(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By
        default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is
        supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on
        the target are closed and initiators must reconnect with the new credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_chap_credentials(x_amz_target, request_options=request_options))

    def update_file_system_association(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a file system association. This operation is only supported in the FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_file_system_association(x_amz_target, request_options=request_options)
        )

    def update_gateway_information(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To
        specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways
        activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name.
        However, changing the name of the gateway has no effect on the gateway's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_gateway_information(x_amz_target, request_options=request_options))

    def update_gateway_software_now(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When
        you make this request, you get a 200 OK success response immediately. However, it might take some time for the
        update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.
        A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your
        applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI
        Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux
        iSCSI settings, respectively.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_gateway_software_now(x_amz_target, request_options=request_options)
        )

    def update_maintenance_start_time(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day
        and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time
        zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will
        persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is
        passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance
        schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We
        recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused
        by updating the gateway could critically impact your deployment.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_maintenance_start_time(x_amz_target, request_options=request_options)
        )

    def update_nfs_file_share(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. Updates the following file share
        settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for
        your file share Squash settings Write status of your file share

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_nfs_file_share(x_amz_target, request_options=request_options))

    def update_smb_file_share(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. File gateways require Security
        Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that
        Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_smb_file_share(x_amz_target, request_options=request_options))

    def update_smb_file_share_visibility(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is
        only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_smb_file_share_visibility(x_amz_target, request_options=request_options)
        )

    def update_smb_local_groups(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the list of Active Directory users and groups that have special permissions for SMB file shares on
        the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_smb_local_groups(x_amz_target, request_options=request_options))

    def update_smb_security_strategy(
        self, x_amz_target: XAmzTarget84OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for
        Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console,
        see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security
        strategy level can affect performance of the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_smb_security_strategy(x_amz_target, request_options=request_options)
        )

    def update_snapshot_schedule(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached
        volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours,
        starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for
        the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and
        the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of
        snapshots.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_snapshot_schedule(x_amz_target, request_options=request_options))

    def update_vtl_device_type(
        self, x_amz_target: XAmzTarget85OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium
        changer type for the tape gateway. This operation enables you to select a different type of medium changer after
        a tape gateway is activated. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_vtl_device_type(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsStorageGatewayWithRawResponse:
        return self._with_raw_response


class AsyncAwsStorageGateway:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStorageGatewayWithRawResponse(client, server, auth)

    async def activate_gateway2(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.activate_gateway2(x_amz_target, request_options=request_options))

    async def add_cache(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the
        cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you
        specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you
        want to configure as cache.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_cache(x_amz_target, request_options=request_options))

    async def add_tags_to_resource(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use
        to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or
        team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage
        Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File
        System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
        that are recovered to a new gateway maintain their tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_tags_to_resource(x_amz_target, request_options=request_options))

    async def add_upload_buffer(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is
        supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway
        Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to
        configure as upload buffer.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_upload_buffer(x_amz_target, request_options=request_options))

    async def add_working_storage(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Configures one or more gateway local disks as working storage for a gateway. This operation is only supported
        in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use
        AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the
        gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you
        want to configure as working storage.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_working_storage(x_amz_target, request_options=request_options))

    async def assign_tape_pool(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.assign_tape_pool(x_amz_target, request_options=request_options))

    async def associate_file_system(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the
        file shares on the Amazon FSx file system are available for access through the gateway. This operation only
        supports the FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_file_system(x_amz_target, request_options=request_options)
        )

    async def attach_volume(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and
        attaching a volume enables you to recover your data from one gateway to a different gateway without creating a
        snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an
        Amazon EC2 instance.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.attach_volume(x_amz_target, request_options=request_options))

    async def cancel_archival(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
        This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cancel_archival(x_amz_target, request_options=request_options))

    async def cancel_retrieval(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval
        process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape
        gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cancel_retrieval(x_amz_target, request_options=request_options))

    async def create_cachedi_scsi_volume(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached
        volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use
        the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of
        the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client
        token. In response, the gateway creates the volume and returns information about it. This information includes
        the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to
        the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this
        cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes
        value must be equal to or larger than the size of the copied volume, in bytes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_cachedi_scsi_volume(x_amz_target, request_options=request_options)
        )

    async def create_nfs_file_share2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_nfs_file_share2(x_amz_target, request_options=request_options)
        )

    async def create_smb_file_share(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon
        Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_smb_file_share(x_amz_target, request_options=request_options)
        )

    async def create_snapshot(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of
        your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an
        Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your
        gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more
        information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by
        providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage
        Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway
        console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only
        supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2
        API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API
        Reference. Volume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ServiceUnavailableError ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_snapshot(x_amz_target, request_options=request_options))

    async def create_snapshot_from_volume_recovery_point(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the
        cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is
        consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume
        gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the
        volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When
        the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage
        Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a
        snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the
        Amazon Elastic Compute Cloud API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ServiceUnavailableError ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_snapshot_from_volume_recovery_point(
                x_amz_target, request_options=request_options
            ),
        )

    async def create_storedi_scsi_volume(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.
        The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the
        disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty
        gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and
        the disk information on which you are creating the volume. In response, the gateway creates the volume and
        returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN
        that initiators can use to connect to the volume target.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_storedi_scsi_volume(x_amz_target, request_options=request_options)
        )

    async def create_tape_pool(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are
        archived in the custom pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_tape_pool(x_amz_target, request_options=request_options))

    async def create_tape_with_barcode(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the
        tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes
        used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be
        allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage
        to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_tape_with_barcode(x_amz_target, request_options=request_options)
        )

    async def create_tapes(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This
        operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you
        can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_tapes(x_amz_target, request_options=request_options))

    async def delete_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be
        created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_automatic_tape_creation_policy(
                x_amz_target, request_options=request_options
            ),
        )

    async def delete_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate
        limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To
        specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This
        operation is supported only for the stored volume, cached volume, and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    async def delete_chap_credentials(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and
        initiator pair. This operation is supported in volume and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_chap_credentials(x_amz_target, request_options=request_options)
        )

    async def delete_file_share(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_file_share(x_amz_target, request_options=request_options))

    async def delete_gateway(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in
        your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM)
        from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the
        gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After
        you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges
        after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be
        billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon
        EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using
        the Amazon EC2 console. For more information, see the Storage Gateway detail page.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_gateway(x_amz_target, request_options=request_options))

    async def delete_snapshot_schedule(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc
        basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing
        up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource
        Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you
        must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud
        API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_snapshot_schedule(x_amz_target, request_options=request_options)
        )

    async def delete_tape(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_tape(x_amz_target, request_options=request_options))

    async def delete_tape_archive(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the
        tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_tape_archive(x_amz_target, request_options=request_options))

    async def delete_tape_pool(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if
        there are no automatic tape creation policies that reference the custom tape pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_tape_pool(x_amz_target, request_options=request_options))

    async def delete_volume(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or
        CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For
        stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse
        the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI
        connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can
        use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and
        check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API
        Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to
        delete.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_volume(x_amz_target, request_options=request_options))

    async def describe_availability_monitor_test(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the most recent high availability monitoring test that was performed on the host in
        a cluster. If a test isn't performed, the status and start time in the response would be null.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_availability_monitor_test(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no
        bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and
        tape gateway types. To describe bandwidth rate limits for S3 file gateways, use
        DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit
        is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response
        body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    async def describe_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have
        bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported
        only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This
        operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule
        consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time
        on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or
        both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an
        ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit
        schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway
        to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_bandwidth_rate_limit_schedule(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_cache(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the cache of a gateway. This operation is only supported in the cached volume,
        tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the
        amount of cache allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_cache(x_amz_target, request_options=request_options))

    async def describe_cachedi_scsi_volumes(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of the gateway volumes specified in the request. This operation is only supported in
        the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the
        response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_cachedi_scsi_volumes(x_amz_target, request_options=request_options)
        )

    async def describe_chap_credentials(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a
        specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape
        gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_chap_credentials(x_amz_target, request_options=request_options)
        )

    async def describe_file_system_associations(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the file system association information. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_file_system_associations(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_gateway_information2(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_gateway_information2(x_amz_target, request_options=request_options)
        )

    async def describe_maintenance_start_time(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence,
        specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for
        the gateway's time zone.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_maintenance_start_time(x_amz_target, request_options=request_options)
        )

    async def describe_nfs_file_shares(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_nfs_file_shares(x_amz_target, request_options=request_options)
        )

    async def describe_smb_file_shares(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_smb_file_shares(x_amz_target, request_options=request_options)
        )

    async def describe_smb_settings(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is
        only supported for file gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_smb_settings(x_amz_target, request_options=request_options)
        )

    async def describe_snapshot_schedule(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes
        intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the
        cached volume and stored volume types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_snapshot_schedule(x_amz_target, request_options=request_options)
        )

    async def describe_storedi_scsi_volumes(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the
        request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume
        ARNs. This operation is only supported in stored volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_storedi_scsi_volumes(x_amz_target, request_options=request_options)
        )

    async def describe_tape_archives(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only
        supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a
        description of all virtual tapes found in the VTS associated with your account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_tape_archives(x_amz_target, request_options=request_options)
        )

    async def describe_tape_recovery_points(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery
        point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your
        gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is
        only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_tape_recovery_points(x_amz_target, request_options=request_options)
        )

    async def describe_tapes(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If
        TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This
        operation is only supported for the tape gateway type. The operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit
        the number of tapes in the response. If the number of tapes returned in the response is truncated, the response
        includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of
        tapes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_tapes(x_amz_target, request_options=request_options))

    async def describe_upload_buffer(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the upload buffer of a gateway. This operation is supported for the stored volume,
        cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer
        space, and it includes the amount of upload buffer space allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_upload_buffer(x_amz_target, request_options=request_options)
        )

    async def describe_vtl_devices(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response,
        Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_vtl_devices(x_amz_target, request_options=request_options))

    async def describe_working_storage(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns information about the working storage of a gateway. This operation is only supported in the stored
        volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use
        DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs
        that are configured as working storage, and it includes the amount of working storage allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_working_storage(x_amz_target, request_options=request_options)
        )

    async def detach_volume(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.
        Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway
        without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a
        gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detach_volume(x_amz_target, request_options=request_options))

    async def disable_gateway(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is
        damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway
        that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a
        gateway is disabled, it cannot be enabled.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.disable_gateway(x_amz_target, request_options=request_options))

    async def disassociate_file_system(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process
        finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the
        FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.disassociate_file_system(x_amz_target, request_options=request_options)
        )

    async def join_domain(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.join_domain(x_amz_target, request_options=request_options))

    async def list_automatic_tape_creation_policies(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies
        for the gateway, it returns an empty list. This operation is only supported for tape gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_automatic_tape_creation_policies(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_file_shares(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the
        calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_file_shares(x_amz_target, request_options=request_options))

    async def list_file_system_associations(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system
        association. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_file_system_associations(x_amz_target, request_options=request_options)
        )

    async def list_gateways2(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_gateways2(x_amz_target, request_options=request_options))

    async def list_local_disks(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon
        Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks,
        specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
        The response includes a DiskStatus field. This field can have a value of present (the disk is available to use),
        missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that
        has incorrect metadata or the disk content is corrupted).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_local_disks(x_amz_target, request_options=request_options))

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the tags that have been added to the specified resource. This operation is supported in storage
        gateways of all types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def list_tape_pools(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool
        Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape
        pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit
        the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape
        pools.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_tape_pools(x_amz_target, request_options=request_options))

    async def list_tapes(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the
        tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the
        operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to
        limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of
        tapes. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_tapes(x_amz_target, request_options=request_options))

    async def list_volume_initiators(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a
        volume is being used or not. This operation is only supported in the cached volume and stored volume gateway
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_volume_initiators(x_amz_target, request_options=request_options)
        )

    async def list_volume_recovery_points(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the recovery points for a specified gateway. This operation is only supported in the cached volume
        gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all
        data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a
        source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_volume_recovery_points(x_amz_target, request_options=request_options)
        )

    async def list_volumes2(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_volumes2(x_amz_target, request_options=request_options))

    async def notify_when_uploaded(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.notify_when_uploaded(x_amz_target, request_options=request_options))

    async def refresh_cache(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.refresh_cache(x_amz_target, request_options=request_options))

    async def remove_tags_from_resource(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from the specified resource. This operation is supported in storage gateways of all
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.remove_tags_from_resource(x_amz_target, request_options=request_options)
        )

    async def reset_cache(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as
        cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual
        tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When
        a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache
        disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting
        contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks,
        there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk
        for your gateway to function properly.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reset_cache(x_amz_target, request_options=request_options))

    async def retrieve_tape_archive(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_tape_archive(x_amz_target, request_options=request_options)
        )

    async def retrieve_tape_recovery_point(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_tape_recovery_point(x_amz_target, request_options=request_options)
        )

    async def set_local_console_password(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Sets the password for your VM local console. When you log in to the local console for the first time, you log
        in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the
        default password to set a new password.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.set_local_console_password(x_amz_target, request_options=request_options)
        )

    async def set_smb_guest_password(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method
        for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.set_smb_guest_password(x_amz_target, request_options=request_options)
        )

    async def shutdown_gateway(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.shutdown_gateway(x_amz_target, request_options=request_options))

    async def start_availability_monitor_test(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Start a test that verifies that the specified gateway is configured for High Availability monitoring in your
        host environment. This request only initiates the test and that a successful response only indicates that the
        test was started. It doesn't indicate that the test passed. For the status of the test, invoke the
        DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief
        period.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_availability_monitor_test(x_amz_target, request_options=request_options)
        )

    async def start_gateway(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then
        make other API calls, your applications can read from or write to the gateway's storage volumes and you will be
        able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately.
        However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and
        check the status before making any additional API calls. For more information, see ActivateGateway. To specify
        which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.start_gateway(x_amz_target, request_options=request_options))

    async def update_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of
        automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape
        creation policy. A gateway can have only one automatic tape creation policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_automatic_tape_creation_policy(
                x_amz_target, request_options=request_options
            ),
        )

    async def update_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate
        limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.
        This operation is supported only for the stored volume, cached volume, and tape gateway types. To update
        bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's
        bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its
        bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update,
        use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_bandwidth_rate_limit(x_amz_target, request_options=request_options)
        )

    async def update_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth
        rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a
        gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3
        file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
        limits.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_bandwidth_rate_limit_schedule(
                x_amz_target, request_options=request_options
            ),
        )

    async def update_chap_credentials(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By
        default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is
        supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on
        the target are closed and initiators must reconnect with the new credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_chap_credentials(x_amz_target, request_options=request_options)
        )

    async def update_file_system_association(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a file system association. This operation is only supported in the FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_file_system_association(x_amz_target, request_options=request_options)
        )

    async def update_gateway_information(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To
        specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways
        activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name.
        However, changing the name of the gateway has no effect on the gateway's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_gateway_information(x_amz_target, request_options=request_options)
        )

    async def update_gateway_software_now(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When
        you make this request, you get a 200 OK success response immediately. However, it might take some time for the
        update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.
        A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your
        applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI
        Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux
        iSCSI settings, respectively.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_gateway_software_now(x_amz_target, request_options=request_options)
        )

    async def update_maintenance_start_time(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day
        and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time
        zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will
        persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is
        passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance
        schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We
        recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused
        by updating the gateway could critically impact your deployment.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_maintenance_start_time(x_amz_target, request_options=request_options)
        )

    async def update_nfs_file_share(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. Updates the following file share
        settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for
        your file share Squash settings Write status of your file share

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_nfs_file_share(x_amz_target, request_options=request_options)
        )

    async def update_smb_file_share(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. File gateways require Security
        Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that
        Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_smb_file_share(x_amz_target, request_options=request_options)
        )

    async def update_smb_file_share_visibility(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is
        only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_smb_file_share_visibility(
                x_amz_target, request_options=request_options
            ),
        )

    async def update_smb_local_groups(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the list of Active Directory users and groups that have special permissions for SMB file shares on
        the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_smb_local_groups(x_amz_target, request_options=request_options)
        )

    async def update_smb_security_strategy(
        self, x_amz_target: XAmzTarget84OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for
        Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console,
        see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security
        strategy level can affect performance of the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_smb_security_strategy(x_amz_target, request_options=request_options)
        )

    async def update_snapshot_schedule(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached
        volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours,
        starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for
        the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and
        the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of
        snapshots.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_snapshot_schedule(x_amz_target, request_options=request_options)
        )

    async def update_vtl_device_type(
        self, x_amz_target: XAmzTarget85OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium
        changer type for the tape gateway. This operation enables you to select a different type of medium changer after
        a tape gateway is activated. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_vtl_device_type(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStorageGatewayWithRawResponse:
        return self._with_raw_response


class AwsStorageGatewayWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_gateway2(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGateway2ErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=activate_gateway2_error_mapper,
            request_options=request_options,
        )

    def add_cache(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddCacheErrorBody]:
        """Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the
        cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you
        specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you
        want to configure as cache.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddCache"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_cache_error_mapper,
            request_options=request_options,
        )

    def add_tags_to_resource(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddTagsToResourceErrorBody]:
        """Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use
        to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or
        team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage
        Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File
        System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
        that are recovered to a new gateway maintain their tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddTagsToResource"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_tags_to_resource_error_mapper,
            request_options=request_options,
        )

    def add_upload_buffer(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddUploadBufferErrorBody]:
        """Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is
        supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway
        Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to
        configure as upload buffer.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddUploadBuffer"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_upload_buffer_error_mapper,
            request_options=request_options,
        )

    def add_working_storage(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddWorkingStorageErrorBody]:
        """Configures one or more gateway local disks as working storage for a gateway. This operation is only supported
        in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use
        AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the
        gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you
        want to configure as working storage.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddWorkingStorage"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_working_storage_error_mapper,
            request_options=request_options,
        )

    def assign_tape_pool(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignTapePoolErrorBody]:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssignTapePool"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=assign_tape_pool_error_mapper,
            request_options=request_options,
        )

    def associate_file_system(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateFileSystemErrorBody]:
        """Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the
        file shares on the Amazon FSx file system are available for access through the gateway. This operation only
        supports the FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateFileSystem"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_file_system_error_mapper,
            request_options=request_options,
        )

    def attach_volume(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AttachVolumeErrorBody]:
        """Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and
        attaching a volume enables you to recover your data from one gateway to a different gateway without creating a
        snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an
        Amazon EC2 instance.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AttachVolume"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=attach_volume_error_mapper,
            request_options=request_options,
        )

    def cancel_archival(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelArchivalErrorBody]:
        """Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
        This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelArchival"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=cancel_archival_error_mapper,
            request_options=request_options,
        )

    def cancel_retrieval(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelRetrievalErrorBody]:
        """Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval
        process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape
        gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelRetrieval"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=cancel_retrieval_error_mapper,
            request_options=request_options,
        )

    def create_cachedi_scsi_volume(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateCachediScsiVolumeErrorBody]:
        """Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached
        volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use
        the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of
        the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client
        token. In response, the gateway creates the volume and returns information about it. This information includes
        the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to
        the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this
        cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes
        value must be equal to or larger than the size of the copied volume, in bytes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCachediSCSIVolume"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_cachedi_scsi_volume_error_mapper,
            request_options=request_options,
        )

    def create_nfs_file_share2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNfsFileShare2ErrorBody]:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateNFSFileShare"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_nfs_file_share2_error_mapper,
            request_options=request_options,
        )

    def create_smb_file_share(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSmbFileShareErrorBody]:
        """Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon
        Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSMBFileShare"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_smb_file_share_error_mapper,
            request_options=request_options,
        )

    def create_snapshot(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSnapshotErrorBody]:
        """Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of
        your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an
        Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your
        gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more
        information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by
        providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage
        Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway
        console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only
        supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2
        API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API
        Reference. Volume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSnapshot"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_snapshot_error_mapper,
            request_options=request_options,
        )

    def create_snapshot_from_volume_recovery_point(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSnapshotFromVolumeRecoveryPointErrorBody]:
        """Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the
        cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is
        consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume
        gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the
        volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When
        the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage
        Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a
        snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the
        Amazon Elastic Compute Cloud API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSnapshotFromVolumeRecoveryPoint"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_snapshot_from_volume_recovery_point_error_mapper,
            request_options=request_options,
        )

    def create_storedi_scsi_volume(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateStorediScsiVolumeErrorBody]:
        """Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.
        The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the
        disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty
        gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and
        the disk information on which you are creating the volume. In response, the gateway creates the volume and
        returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN
        that initiators can use to connect to the volume target.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStorediSCSIVolume"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_storedi_scsi_volume_error_mapper,
            request_options=request_options,
        )

    def create_tape_pool(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapePoolErrorBody]:
        """Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are
        archived in the custom pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapePool"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_tape_pool_error_mapper,
            request_options=request_options,
        )

    def create_tape_with_barcode(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapeWithBarcodeErrorBody]:
        """Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the
        tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes
        used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be
        allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage
        to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapeWithBarcode"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_tape_with_barcode_error_mapper,
            request_options=request_options,
        )

    def create_tapes(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapesErrorBody]:
        """Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This
        operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you
        can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapes"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_tapes_error_mapper,
            request_options=request_options,
        )

    def delete_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomaticTapeCreationPolicyErrorBody]:
        """Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be
        created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAutomaticTapeCreationPolicy"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_automatic_tape_creation_policy_error_mapper,
            request_options=request_options,
        )

    def delete_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBandwidthRateLimitErrorBody]:
        """Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate
        limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To
        specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This
        operation is supported only for the stored volume, cached volume, and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBandwidthRateLimit"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    def delete_chap_credentials(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteChapCredentialsErrorBody]:
        """Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and
        initiator pair. This operation is supported in volume and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteChapCredentials"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_chap_credentials_error_mapper,
            request_options=request_options,
        )

    def delete_file_share(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFileShareErrorBody]:
        """Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFileShare"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_file_share_error_mapper,
            request_options=request_options,
        )

    def delete_gateway(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGatewayErrorBody]:
        """Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in
        your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM)
        from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the
        gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After
        you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges
        after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be
        billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon
        EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using
        the Amazon EC2 console. For more information, see the Storage Gateway detail page.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteGateway"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_gateway_error_mapper,
            request_options=request_options,
        )

    def delete_snapshot_schedule(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnapshotScheduleErrorBody]:
        """Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc
        basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing
        up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource
        Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you
        must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud
        API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteSnapshotSchedule"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    def delete_tape(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapeErrorBody]:
        """Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTape"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_tape_error_mapper,
            request_options=request_options,
        )

    def delete_tape_archive(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapeArchiveErrorBody]:
        """Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the
        tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTapeArchive"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_tape_archive_error_mapper,
            request_options=request_options,
        )

    def delete_tape_pool(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapePoolErrorBody]:
        """Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if
        there are no automatic tape creation policies that reference the custom tape pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTapePool"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_tape_pool_error_mapper,
            request_options=request_options,
        )

    def delete_volume(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVolumeErrorBody]:
        """Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or
        CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For
        stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse
        the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI
        connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can
        use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and
        check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API
        Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to
        delete.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVolume"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_volume_error_mapper,
            request_options=request_options,
        )

    def describe_availability_monitor_test(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeAvailabilityMonitorTestErrorBody]:
        """Returns information about the most recent high availability monitoring test that was performed on the host in
        a cluster. If a test isn't performed, the status and start time in the response would be null.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAvailabilityMonitorTest"),
            headers=[param[XAmzTarget63OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_availability_monitor_test_error_mapper,
            request_options=request_options,
        )

    def describe_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeBandwidthRateLimitErrorBody]:
        """Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no
        bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and
        tape gateway types. To describe bandwidth rate limits for S3 file gateways, use
        DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit
        is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response
        body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeBandwidthRateLimit"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    def describe_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeBandwidthRateLimitScheduleErrorBody]:
        """Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have
        bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported
        only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This
        operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule
        consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time
        on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or
        both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an
        ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit
        schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway
        to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeBandwidthRateLimitSchedule"),
            headers=[param[XAmzTarget65OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_bandwidth_rate_limit_schedule_error_mapper,
            request_options=request_options,
        )

    def describe_cache(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCacheErrorBody]:
        """Returns information about the cache of a gateway. This operation is only supported in the cached volume,
        tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the
        amount of cache allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCache"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_cache_error_mapper,
            request_options=request_options,
        )

    def describe_cachedi_scsi_volumes(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCachediScsiVolumesErrorBody]:
        """Returns a description of the gateway volumes specified in the request. This operation is only supported in
        the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the
        response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCachediSCSIVolumes"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_cachedi_scsi_volumes_error_mapper,
            request_options=request_options,
        )

    def describe_chap_credentials(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeChapCredentialsErrorBody]:
        """Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a
        specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape
        gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeChapCredentials"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_chap_credentials_error_mapper,
            request_options=request_options,
        )

    def describe_file_system_associations(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFileSystemAssociationsErrorBody]:
        """Gets the file system association information. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFileSystemAssociations"),
            headers=[param[XAmzTarget67OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_file_system_associations_error_mapper,
            request_options=request_options,
        )

    def describe_gateway_information2(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeGatewayInformation2ErrorBody]:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeGatewayInformation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_gateway_information2_error_mapper,
            request_options=request_options,
        )

    def describe_maintenance_start_time(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeMaintenanceStartTimeErrorBody]:
        """Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence,
        specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for
        the gateway's time zone.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMaintenanceStartTime"),
            headers=[param[XAmzTarget71OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_maintenance_start_time_error_mapper,
            request_options=request_options,
        )

    def describe_nfs_file_shares(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeNfsFileSharesErrorBody]:
        """Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeNFSFileShares"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_nfs_file_shares_error_mapper,
            request_options=request_options,
        )

    def describe_smb_file_shares(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSmbFileSharesErrorBody]:
        """Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSMBFileShares"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_smb_file_shares_error_mapper,
            request_options=request_options,
        )

    def describe_smb_settings(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSmbSettingsErrorBody]:
        """Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is
        only supported for file gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSMBSettings"),
            headers=[param[XAmzTarget73OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_smb_settings_error_mapper,
            request_options=request_options,
        )

    def describe_snapshot_schedule(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSnapshotScheduleErrorBody]:
        """Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes
        intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the
        cached volume and stored volume types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSnapshotSchedule"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    def describe_storedi_scsi_volumes(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStorediScsiVolumesErrorBody]:
        """Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the
        request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume
        ARNs. This operation is only supported in stored volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStorediSCSIVolumes"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_storedi_scsi_volumes_error_mapper,
            request_options=request_options,
        )

    def describe_tape_archives(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapeArchivesErrorBody]:
        """Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only
        supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a
        description of all virtual tapes found in the VTS associated with your account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapeArchives"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_tape_archives_error_mapper,
            request_options=request_options,
        )

    def describe_tape_recovery_points(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapeRecoveryPointsErrorBody]:
        """Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery
        point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your
        gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is
        only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapeRecoveryPoints"),
            headers=[param[XAmzTarget74OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_tape_recovery_points_error_mapper,
            request_options=request_options,
        )

    def describe_tapes(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapesErrorBody]:
        """Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If
        TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This
        operation is only supported for the tape gateway type. The operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit
        the number of tapes in the response. If the number of tapes returned in the response is truncated, the response
        includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of
        tapes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapes"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_tapes_error_mapper,
            request_options=request_options,
        )

    def describe_upload_buffer(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeUploadBufferErrorBody]:
        """Returns information about the upload buffer of a gateway. This operation is supported for the stored volume,
        cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer
        space, and it includes the amount of upload buffer space allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeUploadBuffer"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_upload_buffer_error_mapper,
            request_options=request_options,
        )

    def describe_vtl_devices(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVtlDevicesErrorBody]:
        """Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response,
        Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVTLDevices"),
            headers=[param[XAmzTarget75OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_vtl_devices_error_mapper,
            request_options=request_options,
        )

    def describe_working_storage(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkingStorageErrorBody]:
        """Returns information about the working storage of a gateway. This operation is only supported in the stored
        volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use
        DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs
        that are configured as working storage, and it includes the amount of working storage allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkingStorage"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_working_storage_error_mapper,
            request_options=request_options,
        )

    def detach_volume(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetachVolumeErrorBody]:
        """Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.
        Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway
        without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a
        gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetachVolume"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detach_volume_error_mapper,
            request_options=request_options,
        )

    def disable_gateway(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableGatewayErrorBody]:
        """Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is
        damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway
        that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a
        gateway is disabled, it cannot be enabled.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisableGateway"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disable_gateway_error_mapper,
            request_options=request_options,
        )

    def disassociate_file_system(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateFileSystemErrorBody]:
        """Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process
        finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the
        FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateFileSystem"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disassociate_file_system_error_mapper,
            request_options=request_options,
        )

    def join_domain(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, JoinDomainErrorBody]:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#JoinDomain"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=join_domain_error_mapper,
            request_options=request_options,
        )

    def list_automatic_tape_creation_policies(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAutomaticTapeCreationPoliciesErrorBody]:
        """Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies
        for the gateway, it returns an empty list. This operation is only supported for tape gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAutomaticTapeCreationPolicies"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_automatic_tape_creation_policies_error_mapper,
            request_options=request_options,
        )

    def list_file_shares(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFileSharesErrorBody]:
        """Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the
        calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFileShares"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_file_shares_error_mapper,
            request_options=request_options,
        )

    def list_file_system_associations(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFileSystemAssociationsErrorBody]:
        """Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system
        association. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFileSystemAssociations"),
            headers=[param[XAmzTarget68OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_file_system_associations_error_mapper,
            request_options=request_options,
        )

    def list_gateways2(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListGateways2ErrorBody]:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListGateways"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_gateways2_error_mapper,
            request_options=request_options,
        )

    def list_local_disks(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListLocalDisksErrorBody]:
        """Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon
        Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks,
        specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
        The response includes a DiskStatus field. This field can have a value of present (the disk is available to use),
        missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that
        has incorrect metadata or the disk content is corrupted).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListLocalDisks"),
            headers=[param[XAmzTarget76OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_local_disks_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags that have been added to the specified resource. This operation is supported in storage
        gateways of all types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def list_tape_pools(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTapePoolsErrorBody]:
        """Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool
        Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape
        pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit
        the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape
        pools.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTapePools"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tape_pools_error_mapper,
            request_options=request_options,
        )

    def list_tapes(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTapesErrorBody]:
        """Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the
        tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the
        operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to
        limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of
        tapes. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTapes"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tapes_error_mapper,
            request_options=request_options,
        )

    def list_volume_initiators(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumeInitiatorsErrorBody]:
        """Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a
        volume is being used or not. This operation is only supported in the cached volume and stored volume gateway
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumeInitiators"),
            headers=[param[XAmzTarget77OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_volume_initiators_error_mapper,
            request_options=request_options,
        )

    def list_volume_recovery_points(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumeRecoveryPointsErrorBody]:
        """Lists the recovery points for a specified gateway. This operation is only supported in the cached volume
        gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all
        data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a
        source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumeRecoveryPoints"),
            headers=[param[XAmzTarget78OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_volume_recovery_points_error_mapper,
            request_options=request_options,
        )

    def list_volumes2(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumes2ErrorBody]:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumes"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_volumes2_error_mapper,
            request_options=request_options,
        )

    def notify_when_uploaded(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, NotifyWhenUploadedErrorBody]:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#NotifyWhenUploaded"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=notify_when_uploaded_error_mapper,
            request_options=request_options,
        )

    def refresh_cache(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RefreshCacheErrorBody]:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RefreshCache"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=refresh_cache_error_mapper,
            request_options=request_options,
        )

    def remove_tags_from_resource(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveTagsFromResourceErrorBody]:
        """Removes one or more tags from the specified resource. This operation is supported in storage gateways of all
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemoveTagsFromResource"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=remove_tags_from_resource_error_mapper,
            request_options=request_options,
        )

    def reset_cache(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ResetCacheErrorBody]:
        """Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as
        cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual
        tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When
        a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache
        disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting
        contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks,
        there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk
        for your gateway to function properly.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResetCache"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=reset_cache_error_mapper,
            request_options=request_options,
        )

    def retrieve_tape_archive(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetrieveTapeArchiveErrorBody]:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeArchive"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=retrieve_tape_archive_error_mapper,
            request_options=request_options,
        )

    def retrieve_tape_recovery_point(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetrieveTapeRecoveryPointErrorBody]:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeRecoveryPoint"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=retrieve_tape_recovery_point_error_mapper,
            request_options=request_options,
        )

    def set_local_console_password(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SetLocalConsolePasswordErrorBody]:
        """Sets the password for your VM local console. When you log in to the local console for the first time, you log
        in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the
        default password to set a new password.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetLocalConsolePassword"),
            headers=[param[XAmzTarget79OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=set_local_console_password_error_mapper,
            request_options=request_options,
        )

    def set_smb_guest_password(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SetSmbGuestPasswordErrorBody]:
        """Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method
        for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetSMBGuestPassword"),
            headers=[param[XAmzTarget80OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=set_smb_guest_password_error_mapper,
            request_options=request_options,
        )

    def shutdown_gateway(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ShutdownGatewayErrorBody]:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ShutdownGateway"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=shutdown_gateway_error_mapper,
            request_options=request_options,
        )

    def start_availability_monitor_test(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartAvailabilityMonitorTestErrorBody]:
        """Start a test that verifies that the specified gateway is configured for High Availability monitoring in your
        host environment. This request only initiates the test and that a successful response only indicates that the
        test was started. It doesn't indicate that the test passed. For the status of the test, invoke the
        DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief
        period.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartAvailabilityMonitorTest"),
            headers=[param[XAmzTarget64OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_availability_monitor_test_error_mapper,
            request_options=request_options,
        )

    def start_gateway(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartGatewayErrorBody]:
        """Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then
        make other API calls, your applications can read from or write to the gateway's storage volumes and you will be
        able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately.
        However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and
        check the status before making any additional API calls. For more information, see ActivateGateway. To specify
        which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartGateway"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_gateway_error_mapper,
            request_options=request_options,
        )

    def update_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateAutomaticTapeCreationPolicyErrorBody]:
        """Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of
        automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape
        creation policy. A gateway can have only one automatic tape creation policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAutomaticTapeCreationPolicy"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_automatic_tape_creation_policy_error_mapper,
            request_options=request_options,
        )

    def update_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateBandwidthRateLimitErrorBody]:
        """Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate
        limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.
        This operation is supported only for the stored volume, cached volume, and tape gateway types. To update
        bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's
        bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its
        bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update,
        use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateBandwidthRateLimit"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    def update_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateBandwidthRateLimitScheduleErrorBody]:
        """Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth
        rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a
        gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3
        file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
        limits.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateBandwidthRateLimitSchedule"),
            headers=[param[XAmzTarget66OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_bandwidth_rate_limit_schedule_error_mapper,
            request_options=request_options,
        )

    def update_chap_credentials(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateChapCredentialsErrorBody]:
        """Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By
        default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is
        supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on
        the target are closed and initiators must reconnect with the new credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateChapCredentials"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_chap_credentials_error_mapper,
            request_options=request_options,
        )

    def update_file_system_association(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateFileSystemAssociationErrorBody]:
        """Updates a file system association. This operation is only supported in the FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFileSystemAssociation"),
            headers=[param[XAmzTarget69OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_file_system_association_error_mapper,
            request_options=request_options,
        )

    def update_gateway_information(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateGatewayInformationErrorBody]:
        """Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To
        specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways
        activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name.
        However, changing the name of the gateway has no effect on the gateway's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateGatewayInformation"),
            headers=[param[XAmzTarget70OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_gateway_information_error_mapper,
            request_options=request_options,
        )

    def update_gateway_software_now(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateGatewaySoftwareNowErrorBody]:
        """Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When
        you make this request, you get a 200 OK success response immediately. However, it might take some time for the
        update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.
        A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your
        applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI
        Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux
        iSCSI settings, respectively.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateGatewaySoftwareNow"),
            headers=[param[XAmzTarget81OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_gateway_software_now_error_mapper,
            request_options=request_options,
        )

    def update_maintenance_start_time(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateMaintenanceStartTimeErrorBody]:
        """Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day
        and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time
        zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will
        persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is
        passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance
        schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We
        recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused
        by updating the gateway could critically impact your deployment.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMaintenanceStartTime"),
            headers=[param[XAmzTarget72OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_maintenance_start_time_error_mapper,
            request_options=request_options,
        )

    def update_nfs_file_share(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateNfsFileShareErrorBody]:
        """Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. Updates the following file share
        settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for
        your file share Squash settings Write status of your file share

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateNFSFileShare"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_nfs_file_share_error_mapper,
            request_options=request_options,
        )

    def update_smb_file_share(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbFileShareErrorBody]:
        """Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. File gateways require Security
        Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that
        Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBFileShare"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_smb_file_share_error_mapper,
            request_options=request_options,
        )

    def update_smb_file_share_visibility(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbFileShareVisibilityErrorBody]:
        """Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is
        only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBFileShareVisibility"),
            headers=[param[XAmzTarget82OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_smb_file_share_visibility_error_mapper,
            request_options=request_options,
        )

    def update_smb_local_groups(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbLocalGroupsErrorBody]:
        """Updates the list of Active Directory users and groups that have special permissions for SMB file shares on
        the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBLocalGroups"),
            headers=[param[XAmzTarget83OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_smb_local_groups_error_mapper,
            request_options=request_options,
        )

    def update_smb_security_strategy(
        self, x_amz_target: XAmzTarget84OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbSecurityStrategyErrorBody]:
        """Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for
        Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console,
        see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security
        strategy level can affect performance of the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBSecurityStrategy"),
            headers=[param[XAmzTarget84OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_smb_security_strategy_error_mapper,
            request_options=request_options,
        )

    def update_snapshot_schedule(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSnapshotScheduleErrorBody]:
        """Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached
        volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours,
        starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for
        the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and
        the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of
        snapshots.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSnapshotSchedule"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    def update_vtl_device_type(
        self, x_amz_target: XAmzTarget85OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateVtlDeviceTypeErrorBody]:
        """Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium
        changer type for the tape gateway. This operation enables you to select a different type of medium changer after
        a tape gateway is activated. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVTLDeviceType"),
            headers=[param[XAmzTarget85OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_vtl_device_type_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStorageGatewayWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_gateway2(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGateway2ErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=activate_gateway2_error_mapper,
            request_options=request_options,
        )

    async def add_cache(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddCacheErrorBody]:
        """Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the
        cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you
        specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you
        want to configure as cache.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddCache"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_cache_error_mapper,
            request_options=request_options,
        )

    async def add_tags_to_resource(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddTagsToResourceErrorBody]:
        """Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use
        to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or
        team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage
        Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File
        System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
        that are recovered to a new gateway maintain their tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddTagsToResource"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_tags_to_resource_error_mapper,
            request_options=request_options,
        )

    async def add_upload_buffer(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddUploadBufferErrorBody]:
        """Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is
        supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway
        Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to
        configure as upload buffer.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddUploadBuffer"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_upload_buffer_error_mapper,
            request_options=request_options,
        )

    async def add_working_storage(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AddWorkingStorageErrorBody]:
        """Configures one or more gateway local disks as working storage for a gateway. This operation is only supported
        in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use
        AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the
        gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you
        want to configure as working storage.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddWorkingStorage"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_working_storage_error_mapper,
            request_options=request_options,
        )

    async def assign_tape_pool(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignTapePoolErrorBody]:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssignTapePool"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=assign_tape_pool_error_mapper,
            request_options=request_options,
        )

    async def associate_file_system(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateFileSystemErrorBody]:
        """Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the
        file shares on the Amazon FSx file system are available for access through the gateway. This operation only
        supports the FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateFileSystem"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_file_system_error_mapper,
            request_options=request_options,
        )

    async def attach_volume(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AttachVolumeErrorBody]:
        """Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and
        attaching a volume enables you to recover your data from one gateway to a different gateway without creating a
        snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an
        Amazon EC2 instance.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AttachVolume"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=attach_volume_error_mapper,
            request_options=request_options,
        )

    async def cancel_archival(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelArchivalErrorBody]:
        """Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
        This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelArchival"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=cancel_archival_error_mapper,
            request_options=request_options,
        )

    async def cancel_retrieval(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CancelRetrievalErrorBody]:
        """Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval
        process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape
        gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelRetrieval"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=cancel_retrieval_error_mapper,
            request_options=request_options,
        )

    async def create_cachedi_scsi_volume(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateCachediScsiVolumeErrorBody]:
        """Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached
        volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use
        the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of
        the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client
        token. In response, the gateway creates the volume and returns information about it. This information includes
        the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to
        the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this
        cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes
        value must be equal to or larger than the size of the copied volume, in bytes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCachediSCSIVolume"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_cachedi_scsi_volume_error_mapper,
            request_options=request_options,
        )

    async def create_nfs_file_share2(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNfsFileShare2ErrorBody]:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateNFSFileShare"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_nfs_file_share2_error_mapper,
            request_options=request_options,
        )

    async def create_smb_file_share(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSmbFileShareErrorBody]:
        """Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon
        Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSMBFileShare"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_smb_file_share_error_mapper,
            request_options=request_options,
        )

    async def create_snapshot(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSnapshotErrorBody]:
        """Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of
        your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an
        Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your
        gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more
        information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by
        providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage
        Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway
        console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only
        supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2
        API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API
        Reference. Volume

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSnapshot"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_snapshot_error_mapper,
            request_options=request_options,
        )

    async def create_snapshot_from_volume_recovery_point(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateSnapshotFromVolumeRecoveryPointErrorBody]:
        """Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the
        cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is
        consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume
        gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the
        volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When
        the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage
        Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the
        snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a
        snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the
        Amazon Elastic Compute Cloud API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateSnapshotFromVolumeRecoveryPoint"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_snapshot_from_volume_recovery_point_error_mapper,
            request_options=request_options,
        )

    async def create_storedi_scsi_volume(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateStorediScsiVolumeErrorBody]:
        """Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.
        The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the
        disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty
        gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and
        the disk information on which you are creating the volume. In response, the gateway creates the volume and
        returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN
        that initiators can use to connect to the volume target.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateStorediSCSIVolume"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_storedi_scsi_volume_error_mapper,
            request_options=request_options,
        )

    async def create_tape_pool(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapePoolErrorBody]:
        """Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are
        archived in the custom pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapePool"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_tape_pool_error_mapper,
            request_options=request_options,
        )

    async def create_tape_with_barcode(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapeWithBarcodeErrorBody]:
        """Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the
        tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes
        used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be
        allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage
        to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapeWithBarcode"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_tape_with_barcode_error_mapper,
            request_options=request_options,
        )

    async def create_tapes(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTapesErrorBody]:
        """Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This
        operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you
        can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTapes"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_tapes_error_mapper,
            request_options=request_options,
        )

    async def delete_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomaticTapeCreationPolicyErrorBody]:
        """Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be
        created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteAutomaticTapeCreationPolicy"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_automatic_tape_creation_policy_error_mapper,
            request_options=request_options,
        )

    async def delete_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBandwidthRateLimitErrorBody]:
        """Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate
        limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To
        specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This
        operation is supported only for the stored volume, cached volume, and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBandwidthRateLimit"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    async def delete_chap_credentials(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteChapCredentialsErrorBody]:
        """Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and
        initiator pair. This operation is supported in volume and tape gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteChapCredentials"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_chap_credentials_error_mapper,
            request_options=request_options,
        )

    async def delete_file_share(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFileShareErrorBody]:
        """Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFileShare"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_file_share_error_mapper,
            request_options=request_options,
        )

    async def delete_gateway(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGatewayErrorBody]:
        """Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in
        your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM)
        from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the
        gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After
        you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges
        after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be
        billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon
        EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using
        the Amazon EC2 console. For more information, see the Storage Gateway detail page.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteGateway"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_gateway_error_mapper,
            request_options=request_options,
        )

    async def delete_snapshot_schedule(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnapshotScheduleErrorBody]:
        """Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc
        basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing
        up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource
        Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you
        must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud
        API Reference.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteSnapshotSchedule"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    async def delete_tape(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapeErrorBody]:
        """Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTape"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_tape_error_mapper,
            request_options=request_options,
        )

    async def delete_tape_archive(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapeArchiveErrorBody]:
        """Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the
        tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTapeArchive"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_tape_archive_error_mapper,
            request_options=request_options,
        )

    async def delete_tape_pool(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteTapePoolErrorBody]:
        """Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if
        there are no automatic tape creation policies that reference the custom tape pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteTapePool"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_tape_pool_error_mapper,
            request_options=request_options,
        )

    async def delete_volume(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVolumeErrorBody]:
        """Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or
        CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For
        stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse
        the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI
        connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can
        use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and
        check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API
        Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to
        delete.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVolume"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_volume_error_mapper,
            request_options=request_options,
        )

    async def describe_availability_monitor_test(
        self, x_amz_target: XAmzTarget63OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeAvailabilityMonitorTestErrorBody]:
        """Returns information about the most recent high availability monitoring test that was performed on the host in
        a cluster. If a test isn't performed, the status and start time in the response would be null.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAvailabilityMonitorTest"),
            headers=[param[XAmzTarget63OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_availability_monitor_test_error_mapper,
            request_options=request_options,
        )

    async def describe_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeBandwidthRateLimitErrorBody]:
        """Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no
        bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and
        tape gateway types. To describe bandwidth rate limits for S3 file gateways, use
        DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit
        is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response
        body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeBandwidthRateLimit"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    async def describe_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget65OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeBandwidthRateLimitScheduleErrorBody]:
        """Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have
        bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported
        only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This
        operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule
        consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time
        on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or
        both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an
        ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit
        schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway
        to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeBandwidthRateLimitSchedule"),
            headers=[param[XAmzTarget65OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_bandwidth_rate_limit_schedule_error_mapper,
            request_options=request_options,
        )

    async def describe_cache(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCacheErrorBody]:
        """Returns information about the cache of a gateway. This operation is only supported in the cached volume,
        tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the
        amount of cache allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCache"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_cache_error_mapper,
            request_options=request_options,
        )

    async def describe_cachedi_scsi_volumes(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCachediScsiVolumesErrorBody]:
        """Returns a description of the gateway volumes specified in the request. This operation is only supported in
        the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the
        response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCachediSCSIVolumes"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_cachedi_scsi_volumes_error_mapper,
            request_options=request_options,
        )

    async def describe_chap_credentials(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeChapCredentialsErrorBody]:
        """Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a
        specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape
        gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeChapCredentials"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_chap_credentials_error_mapper,
            request_options=request_options,
        )

    async def describe_file_system_associations(
        self, x_amz_target: XAmzTarget67OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeFileSystemAssociationsErrorBody]:
        """Gets the file system association information. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeFileSystemAssociations"),
            headers=[param[XAmzTarget67OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_file_system_associations_error_mapper,
            request_options=request_options,
        )

    async def describe_gateway_information2(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeGatewayInformation2ErrorBody]:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeGatewayInformation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_gateway_information2_error_mapper,
            request_options=request_options,
        )

    async def describe_maintenance_start_time(
        self, x_amz_target: XAmzTarget71OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeMaintenanceStartTimeErrorBody]:
        """Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence,
        specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for
        the gateway's time zone.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeMaintenanceStartTime"),
            headers=[param[XAmzTarget71OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_maintenance_start_time_error_mapper,
            request_options=request_options,
        )

    async def describe_nfs_file_shares(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeNfsFileSharesErrorBody]:
        """Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeNFSFileShares"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_nfs_file_shares_error_mapper,
            request_options=request_options,
        )

    async def describe_smb_file_shares(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSmbFileSharesErrorBody]:
        """Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This
        operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSMBFileShares"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_smb_file_shares_error_mapper,
            request_options=request_options,
        )

    async def describe_smb_settings(
        self, x_amz_target: XAmzTarget73OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSmbSettingsErrorBody]:
        """Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is
        only supported for file gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSMBSettings"),
            headers=[param[XAmzTarget73OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_smb_settings_error_mapper,
            request_options=request_options,
        )

    async def describe_snapshot_schedule(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeSnapshotScheduleErrorBody]:
        """Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes
        intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the
        cached volume and stored volume types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeSnapshotSchedule"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    async def describe_storedi_scsi_volumes(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeStorediScsiVolumesErrorBody]:
        """Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the
        request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume
        ARNs. This operation is only supported in stored volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeStorediSCSIVolumes"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_storedi_scsi_volumes_error_mapper,
            request_options=request_options,
        )

    async def describe_tape_archives(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapeArchivesErrorBody]:
        """Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only
        supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a
        description of all virtual tapes found in the VTS associated with your account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapeArchives"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_tape_archives_error_mapper,
            request_options=request_options,
        )

    async def describe_tape_recovery_points(
        self, x_amz_target: XAmzTarget74OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapeRecoveryPointsErrorBody]:
        """Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery
        point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your
        gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is
        only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapeRecoveryPoints"),
            headers=[param[XAmzTarget74OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_tape_recovery_points_error_mapper,
            request_options=request_options,
        )

    async def describe_tapes(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTapesErrorBody]:
        """Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If
        TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This
        operation is only supported for the tape gateway type. The operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit
        the number of tapes in the response. If the number of tapes returned in the response is truncated, the response
        includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of
        tapes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTapes"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_tapes_error_mapper,
            request_options=request_options,
        )

    async def describe_upload_buffer(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeUploadBufferErrorBody]:
        """Returns information about the upload buffer of a gateway. This operation is supported for the stored volume,
        cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer
        space, and it includes the amount of upload buffer space allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeUploadBuffer"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_upload_buffer_error_mapper,
            request_options=request_options,
        )

    async def describe_vtl_devices(
        self, x_amz_target: XAmzTarget75OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVtlDevicesErrorBody]:
        """Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response,
        Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVTLDevices"),
            headers=[param[XAmzTarget75OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_vtl_devices_error_mapper,
            request_options=request_options,
        )

    async def describe_working_storage(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeWorkingStorageErrorBody]:
        """Returns information about the working storage of a gateway. This operation is only supported in the stored
        volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use
        DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the
        DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs
        that are configured as working storage, and it includes the amount of working storage allocated and used.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWorkingStorage"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_working_storage_error_mapper,
            request_options=request_options,
        )

    async def detach_volume(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DetachVolumeErrorBody]:
        """Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.
        Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway
        without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a
        gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetachVolume"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detach_volume_error_mapper,
            request_options=request_options,
        )

    async def disable_gateway(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableGatewayErrorBody]:
        """Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is
        damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway
        that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a
        gateway is disabled, it cannot be enabled.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisableGateway"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disable_gateway_error_mapper,
            request_options=request_options,
        )

    async def disassociate_file_system(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateFileSystemErrorBody]:
        """Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process
        finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the
        FSx File Gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateFileSystem"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disassociate_file_system_error_mapper,
            request_options=request_options,
        )

    async def join_domain(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, JoinDomainErrorBody]:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#JoinDomain"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=join_domain_error_mapper,
            request_options=request_options,
        )

    async def list_automatic_tape_creation_policies(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListAutomaticTapeCreationPoliciesErrorBody]:
        """Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies
        for the gateway, it returns an empty list. This operation is only supported for tape gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListAutomaticTapeCreationPolicies"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_automatic_tape_creation_policies_error_mapper,
            request_options=request_options,
        )

    async def list_file_shares(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFileSharesErrorBody]:
        """Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the
        calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFileShares"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_file_shares_error_mapper,
            request_options=request_options,
        )

    async def list_file_system_associations(
        self, x_amz_target: XAmzTarget68OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFileSystemAssociationsErrorBody]:
        """Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system
        association. This operation is only supported for FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFileSystemAssociations"),
            headers=[param[XAmzTarget68OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_file_system_associations_error_mapper,
            request_options=request_options,
        )

    async def list_gateways2(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListGateways2ErrorBody]:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListGateways"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_gateways2_error_mapper,
            request_options=request_options,
        )

    async def list_local_disks(
        self, x_amz_target: XAmzTarget76OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListLocalDisksErrorBody]:
        """Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon
        Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks,
        specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
        The response includes a DiskStatus field. This field can have a value of present (the disk is available to use),
        missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that
        has incorrect metadata or the disk content is corrupted).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListLocalDisks"),
            headers=[param[XAmzTarget76OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_local_disks_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags that have been added to the specified resource. This operation is supported in storage
        gateways of all types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def list_tape_pools(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTapePoolsErrorBody]:
        """Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool
        Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape
        pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit
        the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape
        pools.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTapePools"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tape_pools_error_mapper,
            request_options=request_options,
        )

    async def list_tapes(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListTapesErrorBody]:
        """Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the
        tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the
        operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the
        operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to
        limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the
        response includes a Marker element that you can use in your subsequent request to retrieve the next set of
        tapes. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTapes"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tapes_error_mapper,
            request_options=request_options,
        )

    async def list_volume_initiators(
        self, x_amz_target: XAmzTarget77OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumeInitiatorsErrorBody]:
        """Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a
        volume is being used or not. This operation is only supported in the cached volume and stored volume gateway
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumeInitiators"),
            headers=[param[XAmzTarget77OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_volume_initiators_error_mapper,
            request_options=request_options,
        )

    async def list_volume_recovery_points(
        self, x_amz_target: XAmzTarget78OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumeRecoveryPointsErrorBody]:
        """Lists the recovery points for a specified gateway. This operation is only supported in the cached volume
        gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all
        data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a
        source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumeRecoveryPoints"),
            headers=[param[XAmzTarget78OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_volume_recovery_points_error_mapper,
            request_options=request_options,
        )

    async def list_volumes2(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumes2ErrorBody]:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumes"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_volumes2_error_mapper,
            request_options=request_options,
        )

    async def notify_when_uploaded(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, NotifyWhenUploadedErrorBody]:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#NotifyWhenUploaded"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=notify_when_uploaded_error_mapper,
            request_options=request_options,
        )

    async def refresh_cache(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RefreshCacheErrorBody]:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RefreshCache"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=refresh_cache_error_mapper,
            request_options=request_options,
        )

    async def remove_tags_from_resource(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RemoveTagsFromResourceErrorBody]:
        """Removes one or more tags from the specified resource. This operation is supported in storage gateways of all
        types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemoveTagsFromResource"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=remove_tags_from_resource_error_mapper,
            request_options=request_options,
        )

    async def reset_cache(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ResetCacheErrorBody]:
        """Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as
        cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual
        tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When
        a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache
        disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting
        contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks,
        there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk
        for your gateway to function properly.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResetCache"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=reset_cache_error_mapper,
            request_options=request_options,
        )

    async def retrieve_tape_archive(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetrieveTapeArchiveErrorBody]:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeArchive"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=retrieve_tape_archive_error_mapper,
            request_options=request_options,
        )

    async def retrieve_tape_recovery_point(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetrieveTapeRecoveryPointErrorBody]:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeRecoveryPoint"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=retrieve_tape_recovery_point_error_mapper,
            request_options=request_options,
        )

    async def set_local_console_password(
        self, x_amz_target: XAmzTarget79OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SetLocalConsolePasswordErrorBody]:
        """Sets the password for your VM local console. When you log in to the local console for the first time, you log
        in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the
        default password to set a new password.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetLocalConsolePassword"),
            headers=[param[XAmzTarget79OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=set_local_console_password_error_mapper,
            request_options=request_options,
        )

    async def set_smb_guest_password(
        self, x_amz_target: XAmzTarget80OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SetSmbGuestPasswordErrorBody]:
        """Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method
        for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetSMBGuestPassword"),
            headers=[param[XAmzTarget80OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=set_smb_guest_password_error_mapper,
            request_options=request_options,
        )

    async def shutdown_gateway(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ShutdownGatewayErrorBody]:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ShutdownGateway"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=shutdown_gateway_error_mapper,
            request_options=request_options,
        )

    async def start_availability_monitor_test(
        self, x_amz_target: XAmzTarget64OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartAvailabilityMonitorTestErrorBody]:
        """Start a test that verifies that the specified gateway is configured for High Availability monitoring in your
        host environment. This request only initiates the test and that a successful response only indicates that the
        test was started. It doesn't indicate that the test passed. For the status of the test, invoke the
        DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief
        period.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartAvailabilityMonitorTest"),
            headers=[param[XAmzTarget64OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_availability_monitor_test_error_mapper,
            request_options=request_options,
        )

    async def start_gateway(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartGatewayErrorBody]:
        """Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then
        make other API calls, your applications can read from or write to the gateway's storage volumes and you will be
        able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately.
        However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and
        check the status before making any additional API calls. For more information, see ActivateGateway. To specify
        which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartGateway"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_gateway_error_mapper,
            request_options=request_options,
        )

    async def update_automatic_tape_creation_policy(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateAutomaticTapeCreationPolicyErrorBody]:
        """Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of
        automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape
        creation policy. A gateway can have only one automatic tape creation policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateAutomaticTapeCreationPolicy"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_automatic_tape_creation_policy_error_mapper,
            request_options=request_options,
        )

    async def update_bandwidth_rate_limit(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateBandwidthRateLimitErrorBody]:
        """Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate
        limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.
        This operation is supported only for the stored volume, cached volume, and tape gateway types. To update
        bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's
        bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its
        bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update,
        use the Amazon Resource Name (ARN) of the gateway in your request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateBandwidthRateLimit"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_bandwidth_rate_limit_error_mapper,
            request_options=request_options,
        )

    async def update_bandwidth_rate_limit_schedule(
        self, x_amz_target: XAmzTarget66OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateBandwidthRateLimitScheduleErrorBody]:
        """Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth
        rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a
        gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3
        file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
        limits.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateBandwidthRateLimitSchedule"),
            headers=[param[XAmzTarget66OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_bandwidth_rate_limit_schedule_error_mapper,
            request_options=request_options,
        )

    async def update_chap_credentials(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateChapCredentialsErrorBody]:
        """Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By
        default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is
        supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on
        the target are closed and initiators must reconnect with the new credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateChapCredentials"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_chap_credentials_error_mapper,
            request_options=request_options,
        )

    async def update_file_system_association(
        self, x_amz_target: XAmzTarget69OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateFileSystemAssociationErrorBody]:
        """Updates a file system association. This operation is only supported in the FSx File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFileSystemAssociation"),
            headers=[param[XAmzTarget69OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_file_system_association_error_mapper,
            request_options=request_options,
        )

    async def update_gateway_information(
        self, x_amz_target: XAmzTarget70OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateGatewayInformationErrorBody]:
        """Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To
        specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways
        activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name.
        However, changing the name of the gateway has no effect on the gateway's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateGatewayInformation"),
            headers=[param[XAmzTarget70OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_gateway_information_error_mapper,
            request_options=request_options,
        )

    async def update_gateway_software_now(
        self, x_amz_target: XAmzTarget81OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateGatewaySoftwareNowErrorBody]:
        """Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When
        you make this request, you get a 200 OK success response immediately. However, it might take some time for the
        update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.
        A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your
        applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI
        Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux
        iSCSI settings, respectively.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateGatewaySoftwareNow"),
            headers=[param[XAmzTarget81OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_gateway_software_now_error_mapper,
            request_options=request_options,
        )

    async def update_maintenance_start_time(
        self, x_amz_target: XAmzTarget72OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateMaintenanceStartTimeErrorBody]:
        """Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day
        and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time
        zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will
        persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is
        passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance
        schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We
        recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused
        by updating the gateway could critically impact your deployment.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateMaintenanceStartTime"),
            headers=[param[XAmzTarget72OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_maintenance_start_time_error_mapper,
            request_options=request_options,
        )

    async def update_nfs_file_share(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateNfsFileShareErrorBody]:
        """Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. Updates the following file share
        settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for
        your file share Squash settings Write status of your file share

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateNFSFileShare"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_nfs_file_share_error_mapper,
            request_options=request_options,
        )

    async def update_smb_file_share(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbFileShareErrorBody]:
        """Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To
        leave a file share field unchanged, set the corresponding input field to null. File gateways require Security
        Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that
        Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If
        Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about
        how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon
        Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBFileShare"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_smb_file_share_error_mapper,
            request_options=request_options,
        )

    async def update_smb_file_share_visibility(
        self, x_amz_target: XAmzTarget82OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbFileShareVisibilityErrorBody]:
        """Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is
        only supported for S3 File Gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBFileShareVisibility"),
            headers=[param[XAmzTarget82OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_smb_file_share_visibility_error_mapper,
            request_options=request_options,
        )

    async def update_smb_local_groups(
        self, x_amz_target: XAmzTarget83OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbLocalGroupsErrorBody]:
        """Updates the list of Active Directory users and groups that have special permissions for SMB file shares on
        the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBLocalGroups"),
            headers=[param[XAmzTarget83OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_smb_local_groups_error_mapper,
            request_options=request_options,
        )

    async def update_smb_security_strategy(
        self, x_amz_target: XAmzTarget84OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSmbSecurityStrategyErrorBody]:
        """Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for
        Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console,
        see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security
        strategy level can affect performance of the gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSMBSecurityStrategy"),
            headers=[param[XAmzTarget84OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_smb_security_strategy_error_mapper,
            request_options=request_options,
        )

    async def update_snapshot_schedule(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateSnapshotScheduleErrorBody]:
        """Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached
        volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours,
        starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for
        the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and
        the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of
        snapshots.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateSnapshotSchedule"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_snapshot_schedule_error_mapper,
            request_options=request_options,
        )

    async def update_vtl_device_type(
        self, x_amz_target: XAmzTarget85OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateVtlDeviceTypeErrorBody]:
        """Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium
        changer type for the tape gateway. This operation enables you to select a different type of medium changer after
        a tape gateway is activated. This operation is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVTLDeviceType"),
            headers=[param[XAmzTarget85OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_vtl_device_type_error_mapper,
            request_options=request_options,
        )
