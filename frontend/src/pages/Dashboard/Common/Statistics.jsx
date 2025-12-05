import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
// import CustomerStatistic from '../../../components/Dashboard/Statistics/CustomerStatistic'
import CustomerStatistic from '../../../components/Dashboard/Statistics/CustomerStatistics'
import SellerStatistics from '../../../components/Dashboard/Statistics/SellerStatistics'

import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useRole from '../../../hooks/useRole'
const Statistics = () => {
  const [role, isRoleLoading] = useRole();

  if(isRoleLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div>
      {role === 'customer' && <CustomerStatistic />}
      {role === 'seller' && <SellerStatistics />}
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics
