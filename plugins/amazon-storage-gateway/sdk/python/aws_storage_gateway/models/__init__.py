from . import enums
from .activate_gateway_input import ActivateGatewayInput, ActivateGatewayInputDict
from .activate_gateway_output import ActivateGatewayOutput, ActivateGatewayOutputDict
from .add_cache_input import AddCacheInput, AddCacheInputDict
from .add_cache_output import AddCacheOutput, AddCacheOutputDict
from .add_tags_to_resource_input import AddTagsToResourceInput, AddTagsToResourceInputDict
from .add_tags_to_resource_output import AddTagsToResourceOutput, AddTagsToResourceOutputDict
from .add_upload_buffer_input import AddUploadBufferInput, AddUploadBufferInputDict
from .add_upload_buffer_output import AddUploadBufferOutput, AddUploadBufferOutputDict
from .add_working_storage_input import AddWorkingStorageInput, AddWorkingStorageInputDict
from .add_working_storage_output import AddWorkingStorageOutput, AddWorkingStorageOutputDict
from .assign_tape_pool_input import AssignTapePoolInput, AssignTapePoolInputDict
from .assign_tape_pool_output import AssignTapePoolOutput, AssignTapePoolOutputDict
from .associate_file_system_input import AssociateFileSystemInput, AssociateFileSystemInputDict
from .associate_file_system_output import AssociateFileSystemOutput, AssociateFileSystemOutputDict
from .attach_volume_input import AttachVolumeInput, AttachVolumeInputDict
from .attach_volume_output import AttachVolumeOutput, AttachVolumeOutputDict
from .automatic_tape_creation_policy_info import AutomaticTapeCreationPolicyInfo, AutomaticTapeCreationPolicyInfoDict
from .automatic_tape_creation_rule import AutomaticTapeCreationRule, AutomaticTapeCreationRuleDict
from .bandwidth_rate_limit_interval import BandwidthRateLimitInterval, BandwidthRateLimitIntervalDict
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .cache_report_filter import CacheReportFilter, CacheReportFilterDict
from .cache_report_info import CacheReportInfo, CacheReportInfoDict
from .cachedi_scsi_volume import CachediScsiVolume, CachediScsiVolumeDict
from .cancel_archival_input import CancelArchivalInput, CancelArchivalInputDict
from .cancel_archival_output import CancelArchivalOutput, CancelArchivalOutputDict
from .cancel_cache_report_input import CancelCacheReportInput, CancelCacheReportInputDict
from .cancel_cache_report_output import CancelCacheReportOutput, CancelCacheReportOutputDict
from .cancel_retrieval_input import CancelRetrievalInput, CancelRetrievalInputDict
from .cancel_retrieval_output import CancelRetrievalOutput, CancelRetrievalOutputDict
from .chap_info import ChapInfo, ChapInfoDict
from .create_cachedi_scsi_volume_input import CreateCachediScsiVolumeInput, CreateCachediScsiVolumeInputDict
from .create_cachedi_scsi_volume_output import CreateCachediScsiVolumeOutput, CreateCachediScsiVolumeOutputDict
from .create_nfs_file_share_input import CreateNfsFileShareInput, CreateNfsFileShareInputDict
from .create_nfs_file_share_output import CreateNfsFileShareOutput, CreateNfsFileShareOutputDict
from .create_smb_file_share_input import CreateSmbFileShareInput, CreateSmbFileShareInputDict
from .create_smb_file_share_output import CreateSmbFileShareOutput, CreateSmbFileShareOutputDict
from .create_snapshot_from_volume_recovery_point_input import (
    CreateSnapshotFromVolumeRecoveryPointInput,
    CreateSnapshotFromVolumeRecoveryPointInputDict,
)
from .create_snapshot_from_volume_recovery_point_output import (
    CreateSnapshotFromVolumeRecoveryPointOutput,
    CreateSnapshotFromVolumeRecoveryPointOutputDict,
)
from .create_snapshot_input import CreateSnapshotInput, CreateSnapshotInputDict
from .create_snapshot_output import CreateSnapshotOutput, CreateSnapshotOutputDict
from .create_storedi_scsi_volume_input import CreateStorediScsiVolumeInput, CreateStorediScsiVolumeInputDict
from .create_storedi_scsi_volume_output import CreateStorediScsiVolumeOutput, CreateStorediScsiVolumeOutputDict
from .create_tape_pool_input import CreateTapePoolInput, CreateTapePoolInputDict
from .create_tape_pool_output import CreateTapePoolOutput, CreateTapePoolOutputDict
from .create_tape_with_barcode_input import CreateTapeWithBarcodeInput, CreateTapeWithBarcodeInputDict
from .create_tape_with_barcode_output import CreateTapeWithBarcodeOutput, CreateTapeWithBarcodeOutputDict
from .create_tapes_input import CreateTapesInput, CreateTapesInputDict
from .create_tapes_output import CreateTapesOutput, CreateTapesOutputDict
from .delete_automatic_tape_creation_policy_input import (
    DeleteAutomaticTapeCreationPolicyInput,
    DeleteAutomaticTapeCreationPolicyInputDict,
)
from .delete_automatic_tape_creation_policy_output import (
    DeleteAutomaticTapeCreationPolicyOutput,
    DeleteAutomaticTapeCreationPolicyOutputDict,
)
from .delete_bandwidth_rate_limit_input import DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitInputDict
from .delete_bandwidth_rate_limit_output import DeleteBandwidthRateLimitOutput, DeleteBandwidthRateLimitOutputDict
from .delete_cache_report_input import DeleteCacheReportInput, DeleteCacheReportInputDict
from .delete_cache_report_output import DeleteCacheReportOutput, DeleteCacheReportOutputDict
from .delete_chap_credentials_input import DeleteChapCredentialsInput, DeleteChapCredentialsInputDict
from .delete_chap_credentials_output import DeleteChapCredentialsOutput, DeleteChapCredentialsOutputDict
from .delete_file_share_input import DeleteFileShareInput, DeleteFileShareInputDict
from .delete_file_share_output import DeleteFileShareOutput, DeleteFileShareOutputDict
from .delete_gateway_input import DeleteGatewayInput, DeleteGatewayInputDict
from .delete_gateway_output import DeleteGatewayOutput, DeleteGatewayOutputDict
from .delete_snapshot_schedule_input import DeleteSnapshotScheduleInput, DeleteSnapshotScheduleInputDict
from .delete_snapshot_schedule_output import DeleteSnapshotScheduleOutput, DeleteSnapshotScheduleOutputDict
from .delete_tape_archive_input import DeleteTapeArchiveInput, DeleteTapeArchiveInputDict
from .delete_tape_archive_output import DeleteTapeArchiveOutput, DeleteTapeArchiveOutputDict
from .delete_tape_input import DeleteTapeInput, DeleteTapeInputDict
from .delete_tape_output import DeleteTapeOutput, DeleteTapeOutputDict
from .delete_tape_pool_input import DeleteTapePoolInput, DeleteTapePoolInputDict
from .delete_tape_pool_output import DeleteTapePoolOutput, DeleteTapePoolOutputDict
from .delete_volume_input import DeleteVolumeInput, DeleteVolumeInputDict
from .delete_volume_output import DeleteVolumeOutput, DeleteVolumeOutputDict
from .describe_availability_monitor_test_input import (
    DescribeAvailabilityMonitorTestInput,
    DescribeAvailabilityMonitorTestInputDict,
)
from .describe_availability_monitor_test_output import (
    DescribeAvailabilityMonitorTestOutput,
    DescribeAvailabilityMonitorTestOutputDict,
)
from .describe_bandwidth_rate_limit_input import DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitInputDict
from .describe_bandwidth_rate_limit_output import DescribeBandwidthRateLimitOutput, DescribeBandwidthRateLimitOutputDict
from .describe_bandwidth_rate_limit_schedule_input import (
    DescribeBandwidthRateLimitScheduleInput,
    DescribeBandwidthRateLimitScheduleInputDict,
)
from .describe_bandwidth_rate_limit_schedule_output import (
    DescribeBandwidthRateLimitScheduleOutput,
    DescribeBandwidthRateLimitScheduleOutputDict,
)
from .describe_cache_input import DescribeCacheInput, DescribeCacheInputDict
from .describe_cache_output import DescribeCacheOutput, DescribeCacheOutputDict
from .describe_cache_report_input import DescribeCacheReportInput, DescribeCacheReportInputDict
from .describe_cache_report_output import DescribeCacheReportOutput, DescribeCacheReportOutputDict
from .describe_cachedi_scsi_volumes_input import DescribeCachediScsiVolumesInput, DescribeCachediScsiVolumesInputDict
from .describe_cachedi_scsi_volumes_output import DescribeCachediScsiVolumesOutput, DescribeCachediScsiVolumesOutputDict
from .describe_chap_credentials_input import DescribeChapCredentialsInput, DescribeChapCredentialsInputDict
from .describe_chap_credentials_output import DescribeChapCredentialsOutput, DescribeChapCredentialsOutputDict
from .describe_file_system_associations_input import (
    DescribeFileSystemAssociationsInput,
    DescribeFileSystemAssociationsInputDict,
)
from .describe_file_system_associations_output import (
    DescribeFileSystemAssociationsOutput,
    DescribeFileSystemAssociationsOutputDict,
)
from .describe_gateway_information_input import DescribeGatewayInformationInput, DescribeGatewayInformationInputDict
from .describe_gateway_information_output import DescribeGatewayInformationOutput, DescribeGatewayInformationOutputDict
from .describe_maintenance_start_time_input import (
    DescribeMaintenanceStartTimeInput,
    DescribeMaintenanceStartTimeInputDict,
)
from .describe_maintenance_start_time_output import (
    DescribeMaintenanceStartTimeOutput,
    DescribeMaintenanceStartTimeOutputDict,
)
from .describe_nfs_file_shares_input import DescribeNfsFileSharesInput, DescribeNfsFileSharesInputDict
from .describe_nfs_file_shares_output import DescribeNfsFileSharesOutput, DescribeNfsFileSharesOutputDict
from .describe_smb_file_shares_input import DescribeSmbFileSharesInput, DescribeSmbFileSharesInputDict
from .describe_smb_file_shares_output import DescribeSmbFileSharesOutput, DescribeSmbFileSharesOutputDict
from .describe_smb_settings_input import DescribeSmbSettingsInput, DescribeSmbSettingsInputDict
from .describe_smb_settings_output import DescribeSmbSettingsOutput, DescribeSmbSettingsOutputDict
from .describe_snapshot_schedule_input import DescribeSnapshotScheduleInput, DescribeSnapshotScheduleInputDict
from .describe_snapshot_schedule_output import DescribeSnapshotScheduleOutput, DescribeSnapshotScheduleOutputDict
from .describe_storedi_scsi_volumes_input import DescribeStorediScsiVolumesInput, DescribeStorediScsiVolumesInputDict
from .describe_storedi_scsi_volumes_output import DescribeStorediScsiVolumesOutput, DescribeStorediScsiVolumesOutputDict
from .describe_tape_archives_input import DescribeTapeArchivesInput, DescribeTapeArchivesInputDict
from .describe_tape_archives_output import DescribeTapeArchivesOutput, DescribeTapeArchivesOutputDict
from .describe_tape_recovery_points_input import DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsInputDict
from .describe_tape_recovery_points_output import DescribeTapeRecoveryPointsOutput, DescribeTapeRecoveryPointsOutputDict
from .describe_tapes_input import DescribeTapesInput, DescribeTapesInputDict
from .describe_tapes_output import DescribeTapesOutput, DescribeTapesOutputDict
from .describe_upload_buffer_input import DescribeUploadBufferInput, DescribeUploadBufferInputDict
from .describe_upload_buffer_output import DescribeUploadBufferOutput, DescribeUploadBufferOutputDict
from .describe_vtl_devices_input import DescribeVtlDevicesInput, DescribeVtlDevicesInputDict
from .describe_vtl_devices_output import DescribeVtlDevicesOutput, DescribeVtlDevicesOutputDict
from .describe_working_storage_input import DescribeWorkingStorageInput, DescribeWorkingStorageInputDict
from .describe_working_storage_output import DescribeWorkingStorageOutput, DescribeWorkingStorageOutputDict
from .detach_volume_input import DetachVolumeInput, DetachVolumeInputDict
from .detach_volume_output import DetachVolumeOutput, DetachVolumeOutputDict
from .devicei_scsi_attributes import DeviceiScsiAttributes, DeviceiScsiAttributesDict
from .disable_gateway_input import DisableGatewayInput, DisableGatewayInputDict
from .disable_gateway_output import DisableGatewayOutput, DisableGatewayOutputDict
from .disassociate_file_system_input import DisassociateFileSystemInput, DisassociateFileSystemInputDict
from .disassociate_file_system_output import DisassociateFileSystemOutput, DisassociateFileSystemOutputDict
from .disk import Disk, DiskDict
from .endpoint_network_configuration import EndpointNetworkConfiguration, EndpointNetworkConfigurationDict
from .evict_files_failing_upload_input import EvictFilesFailingUploadInput, EvictFilesFailingUploadInputDict
from .evict_files_failing_upload_output import EvictFilesFailingUploadOutput, EvictFilesFailingUploadOutputDict
from .file_share_info import FileShareInfo, FileShareInfoDict
from .file_system_association_info import FileSystemAssociationInfo, FileSystemAssociationInfoDict
from .file_system_association_status_detail import (
    FileSystemAssociationStatusDetail,
    FileSystemAssociationStatusDetailDict,
)
from .file_system_association_summary import FileSystemAssociationSummary, FileSystemAssociationSummaryDict
from .gateway_info import GatewayInfo, GatewayInfoDict
from .internal_server_error import InternalServerError, InternalServerErrorDict
from .internal_server_error_error import InternalServerErrorError, InternalServerErrorErrorDict
from .invalid_gateway_request_exception import InvalidGatewayRequestException, InvalidGatewayRequestExceptionDict
from .invalid_gateway_request_exception_error import (
    InvalidGatewayRequestExceptionError,
    InvalidGatewayRequestExceptionErrorDict,
)
from .join_domain_input import JoinDomainInput, JoinDomainInputDict
from .join_domain_output import JoinDomainOutput, JoinDomainOutputDict
from .join_domain_output_aws_storage_gateway_operations_api import (
    JoinDomainOutputAwsStorageGatewayOperationsApi,
    JoinDomainOutputAwsStorageGatewayOperationsApiDict,
)
from .list_automatic_tape_creation_policies_input import (
    ListAutomaticTapeCreationPoliciesInput,
    ListAutomaticTapeCreationPoliciesInputDict,
)
from .list_automatic_tape_creation_policies_output import (
    ListAutomaticTapeCreationPoliciesOutput,
    ListAutomaticTapeCreationPoliciesOutputDict,
)
from .list_cache_reports_input import ListCacheReportsInput, ListCacheReportsInputDict
from .list_cache_reports_output import ListCacheReportsOutput, ListCacheReportsOutputDict
from .list_file_shares_input import ListFileSharesInput, ListFileSharesInputDict
from .list_file_shares_output import ListFileSharesOutput, ListFileSharesOutputDict
from .list_file_system_associations_input import ListFileSystemAssociationsInput, ListFileSystemAssociationsInputDict
from .list_file_system_associations_output import ListFileSystemAssociationsOutput, ListFileSystemAssociationsOutputDict
from .list_gateways_input import ListGatewaysInput, ListGatewaysInputDict
from .list_gateways_output import ListGatewaysOutput, ListGatewaysOutputDict
from .list_local_disks_input import ListLocalDisksInput, ListLocalDisksInputDict
from .list_local_disks_output import ListLocalDisksOutput, ListLocalDisksOutputDict
from .list_tags_for_resource_input import ListTagsForResourceInput, ListTagsForResourceInputDict
from .list_tags_for_resource_output import ListTagsForResourceOutput, ListTagsForResourceOutputDict
from .list_tape_pools_input import ListTapePoolsInput, ListTapePoolsInputDict
from .list_tape_pools_output import ListTapePoolsOutput, ListTapePoolsOutputDict
from .list_tapes_input import ListTapesInput, ListTapesInputDict
from .list_tapes_output import ListTapesOutput, ListTapesOutputDict
from .list_volume_initiators_input import ListVolumeInitiatorsInput, ListVolumeInitiatorsInputDict
from .list_volume_initiators_output import ListVolumeInitiatorsOutput, ListVolumeInitiatorsOutputDict
from .list_volume_recovery_points_input import ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsInputDict
from .list_volume_recovery_points_output import ListVolumeRecoveryPointsOutput, ListVolumeRecoveryPointsOutputDict
from .list_volumes_input import ListVolumesInput, ListVolumesInputDict
from .list_volumes_output import ListVolumesOutput, ListVolumesOutputDict
from .network_interface import NetworkInterface, NetworkInterfaceDict
from .nfs_file_share_defaults import NfsFileShareDefaults, NfsFileShareDefaultsDict
from .nfs_file_share_info import NfsFileShareInfo, NfsFileShareInfoDict
from .notify_when_uploaded_input import NotifyWhenUploadedInput, NotifyWhenUploadedInputDict
from .notify_when_uploaded_output import NotifyWhenUploadedOutput, NotifyWhenUploadedOutputDict
from .pool_info import PoolInfo, PoolInfoDict
from .refresh_cache_input import RefreshCacheInput, RefreshCacheInputDict
from .refresh_cache_output import RefreshCacheOutput, RefreshCacheOutputDict
from .remove_tags_from_resource_input import RemoveTagsFromResourceInput, RemoveTagsFromResourceInputDict
from .remove_tags_from_resource_output import RemoveTagsFromResourceOutput, RemoveTagsFromResourceOutputDict
from .reset_cache_input import ResetCacheInput, ResetCacheInputDict
from .reset_cache_output import ResetCacheOutput, ResetCacheOutputDict
from .retrieve_tape_archive_input import RetrieveTapeArchiveInput, RetrieveTapeArchiveInputDict
from .retrieve_tape_archive_output import RetrieveTapeArchiveOutput, RetrieveTapeArchiveOutputDict
from .retrieve_tape_recovery_point_input import RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointInputDict
from .retrieve_tape_recovery_point_output import RetrieveTapeRecoveryPointOutput, RetrieveTapeRecoveryPointOutputDict
from .service_unavailable_error import ServiceUnavailableError, ServiceUnavailableErrorDict
from .service_unavailable_error_error import ServiceUnavailableErrorError, ServiceUnavailableErrorErrorDict
from .set_local_console_password_input import SetLocalConsolePasswordInput, SetLocalConsolePasswordInputDict
from .set_local_console_password_output import SetLocalConsolePasswordOutput, SetLocalConsolePasswordOutputDict
from .set_smb_guest_password_input import SetSmbGuestPasswordInput, SetSmbGuestPasswordInputDict
from .set_smb_guest_password_output import SetSmbGuestPasswordOutput, SetSmbGuestPasswordOutputDict
from .shutdown_gateway_input import ShutdownGatewayInput, ShutdownGatewayInputDict
from .shutdown_gateway_output import ShutdownGatewayOutput, ShutdownGatewayOutputDict
from .smb_file_share_info import SmbFileShareInfo, SmbFileShareInfoDict
from .smb_local_groups import SmbLocalGroups, SmbLocalGroupsDict
from .software_update_preferences import SoftwareUpdatePreferences, SoftwareUpdatePreferencesDict
from .start_availability_monitor_test_input import (
    StartAvailabilityMonitorTestInput,
    StartAvailabilityMonitorTestInputDict,
)
from .start_availability_monitor_test_output import (
    StartAvailabilityMonitorTestOutput,
    StartAvailabilityMonitorTestOutputDict,
)
from .start_cache_report_input import StartCacheReportInput, StartCacheReportInputDict
from .start_cache_report_output import StartCacheReportOutput, StartCacheReportOutputDict
from .start_gateway_input import StartGatewayInput, StartGatewayInputDict
from .start_gateway_output import StartGatewayOutput, StartGatewayOutputDict
from .storage_gateway_error import StorageGatewayError, StorageGatewayErrorDict
from .storedi_scsi_volume import StorediScsiVolume, StorediScsiVolumeDict
from .tag_model import TagModel, TagModelDict
from .tape import Tape, TapeDict
from .tape_archive import TapeArchive, TapeArchiveDict
from .tape_info import TapeInfo, TapeInfoDict
from .tape_recovery_point_info import TapeRecoveryPointInfo, TapeRecoveryPointInfoDict
from .update_automatic_tape_creation_policy_input import (
    UpdateAutomaticTapeCreationPolicyInput,
    UpdateAutomaticTapeCreationPolicyInputDict,
)
from .update_automatic_tape_creation_policy_output import (
    UpdateAutomaticTapeCreationPolicyOutput,
    UpdateAutomaticTapeCreationPolicyOutputDict,
)
from .update_bandwidth_rate_limit_input import UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitInputDict
from .update_bandwidth_rate_limit_output import UpdateBandwidthRateLimitOutput, UpdateBandwidthRateLimitOutputDict
from .update_bandwidth_rate_limit_schedule_input import (
    UpdateBandwidthRateLimitScheduleInput,
    UpdateBandwidthRateLimitScheduleInputDict,
)
from .update_bandwidth_rate_limit_schedule_output import (
    UpdateBandwidthRateLimitScheduleOutput,
    UpdateBandwidthRateLimitScheduleOutputDict,
)
from .update_chap_credentials_input import UpdateChapCredentialsInput, UpdateChapCredentialsInputDict
from .update_chap_credentials_output import UpdateChapCredentialsOutput, UpdateChapCredentialsOutputDict
from .update_file_system_association_input import UpdateFileSystemAssociationInput, UpdateFileSystemAssociationInputDict
from .update_file_system_association_output import (
    UpdateFileSystemAssociationOutput,
    UpdateFileSystemAssociationOutputDict,
)
from .update_gateway_information_input import UpdateGatewayInformationInput, UpdateGatewayInformationInputDict
from .update_gateway_information_output import UpdateGatewayInformationOutput, UpdateGatewayInformationOutputDict
from .update_gateway_software_now_input import UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowInputDict
from .update_gateway_software_now_output import UpdateGatewaySoftwareNowOutput, UpdateGatewaySoftwareNowOutputDict
from .update_maintenance_start_time_input import UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeInputDict
from .update_maintenance_start_time_output import UpdateMaintenanceStartTimeOutput, UpdateMaintenanceStartTimeOutputDict
from .update_nfs_file_share_input import UpdateNfsFileShareInput, UpdateNfsFileShareInputDict
from .update_nfs_file_share_output import UpdateNfsFileShareOutput, UpdateNfsFileShareOutputDict
from .update_smb_file_share_input import UpdateSmbFileShareInput, UpdateSmbFileShareInputDict
from .update_smb_file_share_output import UpdateSmbFileShareOutput, UpdateSmbFileShareOutputDict
from .update_smb_file_share_visibility_input import (
    UpdateSmbFileShareVisibilityInput,
    UpdateSmbFileShareVisibilityInputDict,
)
from .update_smb_file_share_visibility_output import (
    UpdateSmbFileShareVisibilityOutput,
    UpdateSmbFileShareVisibilityOutputDict,
)
from .update_smb_local_groups_input import UpdateSmbLocalGroupsInput, UpdateSmbLocalGroupsInputDict
from .update_smb_local_groups_output import UpdateSmbLocalGroupsOutput, UpdateSmbLocalGroupsOutputDict
from .update_smb_security_strategy_input import UpdateSmbSecurityStrategyInput, UpdateSmbSecurityStrategyInputDict
from .update_smb_security_strategy_output import UpdateSmbSecurityStrategyOutput, UpdateSmbSecurityStrategyOutputDict
from .update_snapshot_schedule_input import UpdateSnapshotScheduleInput, UpdateSnapshotScheduleInputDict
from .update_snapshot_schedule_output import UpdateSnapshotScheduleOutput, UpdateSnapshotScheduleOutputDict
from .update_vtl_device_type_input import UpdateVtlDeviceTypeInput, UpdateVtlDeviceTypeInputDict
from .update_vtl_device_type_output import UpdateVtlDeviceTypeOutput, UpdateVtlDeviceTypeOutputDict
from .volume_info import VolumeInfo, VolumeInfoDict
from .volume_recovery_point_info import VolumeRecoveryPointInfo, VolumeRecoveryPointInfoDict
from .volumei_scsi_attributes import VolumeiScsiAttributes, VolumeiScsiAttributesDict
from .vtl_device import VtlDevice, VtlDeviceDict

__all__ = [
    "enums",
    "ActivateGatewayInput",
    "ActivateGatewayInputDict",
    "ActivateGatewayOutput",
    "ActivateGatewayOutputDict",
    "AddCacheInput",
    "AddCacheInputDict",
    "AddCacheOutput",
    "AddCacheOutputDict",
    "AddTagsToResourceInput",
    "AddTagsToResourceInputDict",
    "AddTagsToResourceOutput",
    "AddTagsToResourceOutputDict",
    "AddUploadBufferInput",
    "AddUploadBufferInputDict",
    "AddUploadBufferOutput",
    "AddUploadBufferOutputDict",
    "AddWorkingStorageInput",
    "AddWorkingStorageInputDict",
    "AddWorkingStorageOutput",
    "AddWorkingStorageOutputDict",
    "AssignTapePoolInput",
    "AssignTapePoolInputDict",
    "AssignTapePoolOutput",
    "AssignTapePoolOutputDict",
    "AssociateFileSystemInput",
    "AssociateFileSystemInputDict",
    "AssociateFileSystemOutput",
    "AssociateFileSystemOutputDict",
    "AttachVolumeInput",
    "AttachVolumeInputDict",
    "AttachVolumeOutput",
    "AttachVolumeOutputDict",
    "AutomaticTapeCreationPolicyInfo",
    "AutomaticTapeCreationPolicyInfoDict",
    "AutomaticTapeCreationRule",
    "AutomaticTapeCreationRuleDict",
    "BandwidthRateLimitInterval",
    "BandwidthRateLimitIntervalDict",
    "CacheAttributes",
    "CacheAttributesDict",
    "CacheReportFilter",
    "CacheReportFilterDict",
    "CacheReportInfo",
    "CacheReportInfoDict",
    "CachediScsiVolume",
    "CachediScsiVolumeDict",
    "CancelArchivalInput",
    "CancelArchivalInputDict",
    "CancelArchivalOutput",
    "CancelArchivalOutputDict",
    "CancelCacheReportInput",
    "CancelCacheReportInputDict",
    "CancelCacheReportOutput",
    "CancelCacheReportOutputDict",
    "CancelRetrievalInput",
    "CancelRetrievalInputDict",
    "CancelRetrievalOutput",
    "CancelRetrievalOutputDict",
    "ChapInfo",
    "ChapInfoDict",
    "CreateCachediScsiVolumeInput",
    "CreateCachediScsiVolumeInputDict",
    "CreateCachediScsiVolumeOutput",
    "CreateCachediScsiVolumeOutputDict",
    "CreateNfsFileShareInput",
    "CreateNfsFileShareInputDict",
    "CreateNfsFileShareOutput",
    "CreateNfsFileShareOutputDict",
    "CreateSmbFileShareInput",
    "CreateSmbFileShareInputDict",
    "CreateSmbFileShareOutput",
    "CreateSmbFileShareOutputDict",
    "CreateSnapshotFromVolumeRecoveryPointInput",
    "CreateSnapshotFromVolumeRecoveryPointInputDict",
    "CreateSnapshotFromVolumeRecoveryPointOutput",
    "CreateSnapshotFromVolumeRecoveryPointOutputDict",
    "CreateSnapshotInput",
    "CreateSnapshotInputDict",
    "CreateSnapshotOutput",
    "CreateSnapshotOutputDict",
    "CreateStorediScsiVolumeInput",
    "CreateStorediScsiVolumeInputDict",
    "CreateStorediScsiVolumeOutput",
    "CreateStorediScsiVolumeOutputDict",
    "CreateTapePoolInput",
    "CreateTapePoolInputDict",
    "CreateTapePoolOutput",
    "CreateTapePoolOutputDict",
    "CreateTapeWithBarcodeInput",
    "CreateTapeWithBarcodeInputDict",
    "CreateTapeWithBarcodeOutput",
    "CreateTapeWithBarcodeOutputDict",
    "CreateTapesInput",
    "CreateTapesInputDict",
    "CreateTapesOutput",
    "CreateTapesOutputDict",
    "DeleteAutomaticTapeCreationPolicyInput",
    "DeleteAutomaticTapeCreationPolicyInputDict",
    "DeleteAutomaticTapeCreationPolicyOutput",
    "DeleteAutomaticTapeCreationPolicyOutputDict",
    "DeleteBandwidthRateLimitInput",
    "DeleteBandwidthRateLimitInputDict",
    "DeleteBandwidthRateLimitOutput",
    "DeleteBandwidthRateLimitOutputDict",
    "DeleteCacheReportInput",
    "DeleteCacheReportInputDict",
    "DeleteCacheReportOutput",
    "DeleteCacheReportOutputDict",
    "DeleteChapCredentialsInput",
    "DeleteChapCredentialsInputDict",
    "DeleteChapCredentialsOutput",
    "DeleteChapCredentialsOutputDict",
    "DeleteFileShareInput",
    "DeleteFileShareInputDict",
    "DeleteFileShareOutput",
    "DeleteFileShareOutputDict",
    "DeleteGatewayInput",
    "DeleteGatewayInputDict",
    "DeleteGatewayOutput",
    "DeleteGatewayOutputDict",
    "DeleteSnapshotScheduleInput",
    "DeleteSnapshotScheduleInputDict",
    "DeleteSnapshotScheduleOutput",
    "DeleteSnapshotScheduleOutputDict",
    "DeleteTapeArchiveInput",
    "DeleteTapeArchiveInputDict",
    "DeleteTapeArchiveOutput",
    "DeleteTapeArchiveOutputDict",
    "DeleteTapeInput",
    "DeleteTapeInputDict",
    "DeleteTapeOutput",
    "DeleteTapeOutputDict",
    "DeleteTapePoolInput",
    "DeleteTapePoolInputDict",
    "DeleteTapePoolOutput",
    "DeleteTapePoolOutputDict",
    "DeleteVolumeInput",
    "DeleteVolumeInputDict",
    "DeleteVolumeOutput",
    "DeleteVolumeOutputDict",
    "DescribeAvailabilityMonitorTestInput",
    "DescribeAvailabilityMonitorTestInputDict",
    "DescribeAvailabilityMonitorTestOutput",
    "DescribeAvailabilityMonitorTestOutputDict",
    "DescribeBandwidthRateLimitInput",
    "DescribeBandwidthRateLimitInputDict",
    "DescribeBandwidthRateLimitOutput",
    "DescribeBandwidthRateLimitOutputDict",
    "DescribeBandwidthRateLimitScheduleInput",
    "DescribeBandwidthRateLimitScheduleInputDict",
    "DescribeBandwidthRateLimitScheduleOutput",
    "DescribeBandwidthRateLimitScheduleOutputDict",
    "DescribeCacheInput",
    "DescribeCacheInputDict",
    "DescribeCacheOutput",
    "DescribeCacheOutputDict",
    "DescribeCacheReportInput",
    "DescribeCacheReportInputDict",
    "DescribeCacheReportOutput",
    "DescribeCacheReportOutputDict",
    "DescribeCachediScsiVolumesInput",
    "DescribeCachediScsiVolumesInputDict",
    "DescribeCachediScsiVolumesOutput",
    "DescribeCachediScsiVolumesOutputDict",
    "DescribeChapCredentialsInput",
    "DescribeChapCredentialsInputDict",
    "DescribeChapCredentialsOutput",
    "DescribeChapCredentialsOutputDict",
    "DescribeFileSystemAssociationsInput",
    "DescribeFileSystemAssociationsInputDict",
    "DescribeFileSystemAssociationsOutput",
    "DescribeFileSystemAssociationsOutputDict",
    "DescribeGatewayInformationInput",
    "DescribeGatewayInformationInputDict",
    "DescribeGatewayInformationOutput",
    "DescribeGatewayInformationOutputDict",
    "DescribeMaintenanceStartTimeInput",
    "DescribeMaintenanceStartTimeInputDict",
    "DescribeMaintenanceStartTimeOutput",
    "DescribeMaintenanceStartTimeOutputDict",
    "DescribeNfsFileSharesInput",
    "DescribeNfsFileSharesInputDict",
    "DescribeNfsFileSharesOutput",
    "DescribeNfsFileSharesOutputDict",
    "DescribeSmbFileSharesInput",
    "DescribeSmbFileSharesInputDict",
    "DescribeSmbFileSharesOutput",
    "DescribeSmbFileSharesOutputDict",
    "DescribeSmbSettingsInput",
    "DescribeSmbSettingsInputDict",
    "DescribeSmbSettingsOutput",
    "DescribeSmbSettingsOutputDict",
    "DescribeSnapshotScheduleInput",
    "DescribeSnapshotScheduleInputDict",
    "DescribeSnapshotScheduleOutput",
    "DescribeSnapshotScheduleOutputDict",
    "DescribeStorediScsiVolumesInput",
    "DescribeStorediScsiVolumesInputDict",
    "DescribeStorediScsiVolumesOutput",
    "DescribeStorediScsiVolumesOutputDict",
    "DescribeTapeArchivesInput",
    "DescribeTapeArchivesInputDict",
    "DescribeTapeArchivesOutput",
    "DescribeTapeArchivesOutputDict",
    "DescribeTapeRecoveryPointsInput",
    "DescribeTapeRecoveryPointsInputDict",
    "DescribeTapeRecoveryPointsOutput",
    "DescribeTapeRecoveryPointsOutputDict",
    "DescribeTapesInput",
    "DescribeTapesInputDict",
    "DescribeTapesOutput",
    "DescribeTapesOutputDict",
    "DescribeUploadBufferInput",
    "DescribeUploadBufferInputDict",
    "DescribeUploadBufferOutput",
    "DescribeUploadBufferOutputDict",
    "DescribeVtlDevicesInput",
    "DescribeVtlDevicesInputDict",
    "DescribeVtlDevicesOutput",
    "DescribeVtlDevicesOutputDict",
    "DescribeWorkingStorageInput",
    "DescribeWorkingStorageInputDict",
    "DescribeWorkingStorageOutput",
    "DescribeWorkingStorageOutputDict",
    "DetachVolumeInput",
    "DetachVolumeInputDict",
    "DetachVolumeOutput",
    "DetachVolumeOutputDict",
    "DeviceiScsiAttributes",
    "DeviceiScsiAttributesDict",
    "DisableGatewayInput",
    "DisableGatewayInputDict",
    "DisableGatewayOutput",
    "DisableGatewayOutputDict",
    "DisassociateFileSystemInput",
    "DisassociateFileSystemInputDict",
    "DisassociateFileSystemOutput",
    "DisassociateFileSystemOutputDict",
    "Disk",
    "DiskDict",
    "EndpointNetworkConfiguration",
    "EndpointNetworkConfigurationDict",
    "EvictFilesFailingUploadInput",
    "EvictFilesFailingUploadInputDict",
    "EvictFilesFailingUploadOutput",
    "EvictFilesFailingUploadOutputDict",
    "FileShareInfo",
    "FileShareInfoDict",
    "FileSystemAssociationInfo",
    "FileSystemAssociationInfoDict",
    "FileSystemAssociationStatusDetail",
    "FileSystemAssociationStatusDetailDict",
    "FileSystemAssociationSummary",
    "FileSystemAssociationSummaryDict",
    "GatewayInfo",
    "GatewayInfoDict",
    "InternalServerError",
    "InternalServerErrorDict",
    "InternalServerErrorError",
    "InternalServerErrorErrorDict",
    "InvalidGatewayRequestException",
    "InvalidGatewayRequestExceptionDict",
    "InvalidGatewayRequestExceptionError",
    "InvalidGatewayRequestExceptionErrorDict",
    "JoinDomainInput",
    "JoinDomainInputDict",
    "JoinDomainOutput",
    "JoinDomainOutputAwsStorageGatewayOperationsApi",
    "JoinDomainOutputAwsStorageGatewayOperationsApiDict",
    "JoinDomainOutputDict",
    "ListAutomaticTapeCreationPoliciesInput",
    "ListAutomaticTapeCreationPoliciesInputDict",
    "ListAutomaticTapeCreationPoliciesOutput",
    "ListAutomaticTapeCreationPoliciesOutputDict",
    "ListCacheReportsInput",
    "ListCacheReportsInputDict",
    "ListCacheReportsOutput",
    "ListCacheReportsOutputDict",
    "ListFileSharesInput",
    "ListFileSharesInputDict",
    "ListFileSharesOutput",
    "ListFileSharesOutputDict",
    "ListFileSystemAssociationsInput",
    "ListFileSystemAssociationsInputDict",
    "ListFileSystemAssociationsOutput",
    "ListFileSystemAssociationsOutputDict",
    "ListGatewaysInput",
    "ListGatewaysInputDict",
    "ListGatewaysOutput",
    "ListGatewaysOutputDict",
    "ListLocalDisksInput",
    "ListLocalDisksInputDict",
    "ListLocalDisksOutput",
    "ListLocalDisksOutputDict",
    "ListTagsForResourceInput",
    "ListTagsForResourceInputDict",
    "ListTagsForResourceOutput",
    "ListTagsForResourceOutputDict",
    "ListTapePoolsInput",
    "ListTapePoolsInputDict",
    "ListTapePoolsOutput",
    "ListTapePoolsOutputDict",
    "ListTapesInput",
    "ListTapesInputDict",
    "ListTapesOutput",
    "ListTapesOutputDict",
    "ListVolumeInitiatorsInput",
    "ListVolumeInitiatorsInputDict",
    "ListVolumeInitiatorsOutput",
    "ListVolumeInitiatorsOutputDict",
    "ListVolumeRecoveryPointsInput",
    "ListVolumeRecoveryPointsInputDict",
    "ListVolumeRecoveryPointsOutput",
    "ListVolumeRecoveryPointsOutputDict",
    "ListVolumesInput",
    "ListVolumesInputDict",
    "ListVolumesOutput",
    "ListVolumesOutputDict",
    "NetworkInterface",
    "NetworkInterfaceDict",
    "NfsFileShareDefaults",
    "NfsFileShareDefaultsDict",
    "NfsFileShareInfo",
    "NfsFileShareInfoDict",
    "NotifyWhenUploadedInput",
    "NotifyWhenUploadedInputDict",
    "NotifyWhenUploadedOutput",
    "NotifyWhenUploadedOutputDict",
    "PoolInfo",
    "PoolInfoDict",
    "RefreshCacheInput",
    "RefreshCacheInputDict",
    "RefreshCacheOutput",
    "RefreshCacheOutputDict",
    "RemoveTagsFromResourceInput",
    "RemoveTagsFromResourceInputDict",
    "RemoveTagsFromResourceOutput",
    "RemoveTagsFromResourceOutputDict",
    "ResetCacheInput",
    "ResetCacheInputDict",
    "ResetCacheOutput",
    "ResetCacheOutputDict",
    "RetrieveTapeArchiveInput",
    "RetrieveTapeArchiveInputDict",
    "RetrieveTapeArchiveOutput",
    "RetrieveTapeArchiveOutputDict",
    "RetrieveTapeRecoveryPointInput",
    "RetrieveTapeRecoveryPointInputDict",
    "RetrieveTapeRecoveryPointOutput",
    "RetrieveTapeRecoveryPointOutputDict",
    "ServiceUnavailableError",
    "ServiceUnavailableErrorDict",
    "ServiceUnavailableErrorError",
    "ServiceUnavailableErrorErrorDict",
    "SetLocalConsolePasswordInput",
    "SetLocalConsolePasswordInputDict",
    "SetLocalConsolePasswordOutput",
    "SetLocalConsolePasswordOutputDict",
    "SetSmbGuestPasswordInput",
    "SetSmbGuestPasswordInputDict",
    "SetSmbGuestPasswordOutput",
    "SetSmbGuestPasswordOutputDict",
    "ShutdownGatewayInput",
    "ShutdownGatewayInputDict",
    "ShutdownGatewayOutput",
    "ShutdownGatewayOutputDict",
    "SmbFileShareInfo",
    "SmbFileShareInfoDict",
    "SmbLocalGroups",
    "SmbLocalGroupsDict",
    "SoftwareUpdatePreferences",
    "SoftwareUpdatePreferencesDict",
    "StartAvailabilityMonitorTestInput",
    "StartAvailabilityMonitorTestInputDict",
    "StartAvailabilityMonitorTestOutput",
    "StartAvailabilityMonitorTestOutputDict",
    "StartCacheReportInput",
    "StartCacheReportInputDict",
    "StartCacheReportOutput",
    "StartCacheReportOutputDict",
    "StartGatewayInput",
    "StartGatewayInputDict",
    "StartGatewayOutput",
    "StartGatewayOutputDict",
    "StorageGatewayError",
    "StorageGatewayErrorDict",
    "StorediScsiVolume",
    "StorediScsiVolumeDict",
    "TagModel",
    "TagModelDict",
    "Tape",
    "TapeArchive",
    "TapeArchiveDict",
    "TapeDict",
    "TapeInfo",
    "TapeInfoDict",
    "TapeRecoveryPointInfo",
    "TapeRecoveryPointInfoDict",
    "UpdateAutomaticTapeCreationPolicyInput",
    "UpdateAutomaticTapeCreationPolicyInputDict",
    "UpdateAutomaticTapeCreationPolicyOutput",
    "UpdateAutomaticTapeCreationPolicyOutputDict",
    "UpdateBandwidthRateLimitInput",
    "UpdateBandwidthRateLimitInputDict",
    "UpdateBandwidthRateLimitOutput",
    "UpdateBandwidthRateLimitOutputDict",
    "UpdateBandwidthRateLimitScheduleInput",
    "UpdateBandwidthRateLimitScheduleInputDict",
    "UpdateBandwidthRateLimitScheduleOutput",
    "UpdateBandwidthRateLimitScheduleOutputDict",
    "UpdateChapCredentialsInput",
    "UpdateChapCredentialsInputDict",
    "UpdateChapCredentialsOutput",
    "UpdateChapCredentialsOutputDict",
    "UpdateFileSystemAssociationInput",
    "UpdateFileSystemAssociationInputDict",
    "UpdateFileSystemAssociationOutput",
    "UpdateFileSystemAssociationOutputDict",
    "UpdateGatewayInformationInput",
    "UpdateGatewayInformationInputDict",
    "UpdateGatewayInformationOutput",
    "UpdateGatewayInformationOutputDict",
    "UpdateGatewaySoftwareNowInput",
    "UpdateGatewaySoftwareNowInputDict",
    "UpdateGatewaySoftwareNowOutput",
    "UpdateGatewaySoftwareNowOutputDict",
    "UpdateMaintenanceStartTimeInput",
    "UpdateMaintenanceStartTimeInputDict",
    "UpdateMaintenanceStartTimeOutput",
    "UpdateMaintenanceStartTimeOutputDict",
    "UpdateNfsFileShareInput",
    "UpdateNfsFileShareInputDict",
    "UpdateNfsFileShareOutput",
    "UpdateNfsFileShareOutputDict",
    "UpdateSmbFileShareInput",
    "UpdateSmbFileShareInputDict",
    "UpdateSmbFileShareOutput",
    "UpdateSmbFileShareOutputDict",
    "UpdateSmbFileShareVisibilityInput",
    "UpdateSmbFileShareVisibilityInputDict",
    "UpdateSmbFileShareVisibilityOutput",
    "UpdateSmbFileShareVisibilityOutputDict",
    "UpdateSmbLocalGroupsInput",
    "UpdateSmbLocalGroupsInputDict",
    "UpdateSmbLocalGroupsOutput",
    "UpdateSmbLocalGroupsOutputDict",
    "UpdateSmbSecurityStrategyInput",
    "UpdateSmbSecurityStrategyInputDict",
    "UpdateSmbSecurityStrategyOutput",
    "UpdateSmbSecurityStrategyOutputDict",
    "UpdateSnapshotScheduleInput",
    "UpdateSnapshotScheduleInputDict",
    "UpdateSnapshotScheduleOutput",
    "UpdateSnapshotScheduleOutputDict",
    "UpdateVtlDeviceTypeInput",
    "UpdateVtlDeviceTypeInputDict",
    "UpdateVtlDeviceTypeOutput",
    "UpdateVtlDeviceTypeOutputDict",
    "VolumeInfo",
    "VolumeInfoDict",
    "VolumeRecoveryPointInfo",
    "VolumeRecoveryPointInfoDict",
    "VolumeiScsiAttributes",
    "VolumeiScsiAttributesDict",
    "VtlDevice",
    "VtlDeviceDict",
]
